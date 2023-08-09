let activeTabIndex = 0
const myTabs = []
if (window.top.myTabs) {
  window.top.myTabs.forEach((tab, i) => {
    if (i === 0 || !tab) {
      return
    }
    try {
      tab.close()
      window.top.myTabs[i] = null
      // eslint-disable-next-line no-empty
    } catch (e) {}
  })
}
window.top.myTabs = myTabs
const myTabNames = []
window.top.myTabNames = myTabNames

function debugTabState() {
  // comment this out to silence it
  console.warn('-----debugTabState: active_tab:', activeTabIndex + ' ' + myTabNames[activeTabIndex])
  myTabs.forEach((_win, k) => {
    console.warn(k, {
      activeTabIndex,
      name: myTabNames[k],
      win: _win,
      winATABNAME: _win ? _win.ATABNAME : null,
      app_name: _win ? _win.APP_NAME : null // something i use for debugging
    })
  })
}

Cypress.Commands.add('debugTabHelper', () => {
  debugTabState()
  return {
    activeTabIndex,
    myTabNames,
    myTabs
  }
})

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  // support for keying the first window with a tabName like our child windows to simplify switching windows and making it readable
  // instead of keeping track of array indexes
  // can pass options as first param too
  let tabName = null
  if (url && url.tabName) {
    tabName = url.tabName
  }
  if (options && options.tabName) {
    tabName = options.tabName
  }
  if (tabName) {
    myTabNames[0] = tabName
  } else {
    myTabNames[0] = 'root'
  }
  myTabs[0] = cy.state('window')
  // originalFn is the existing `visit` command that you need to call
  // and it will receive whatever you pass in here.
  //
  // make sure to add a return here!
  return originalFn(url, options)
})

// note: cy.reload win.location.reload, etc break our context aware popups
// use this special visit function that maintains our context awareness when navigating on the currently active context
Cypress.Commands.add('tabVisit', (url, tabName) => {
  if (typeof tabName === 'undefined') {
    tabName = myTabNames[myTabNames.indexOf(activeTabIndex)]
  }
  const windowIndex = myTabNames.indexOf(tabName)

  console.warn('tabVisit', {
    tabName,
    windowIndex
  })

  if (windowIndex === 0) {
    // for root window, reattach after iframe onload
    return new Cypress.Promise((resolve) => {
      activeTabIndex = 0
      const baseWindow = myTabs[0] || cy.state('window')
      const aut = baseWindow.top.document.getElementsByClassName('aut-iframe')[0]
      // console.warn('aut?', aut, originalWindow.document.getElementsByClassName('aut-iframe')[0])
      aut.onload = function () {
        aut.onload = null
        activeTabIndex = 0
        setTimeout(() => {
          activeTabIndex = 0
          myTabs[0] = aut.contentWindow
          cy.state('document', aut.contentWindow.document)
          cy.state('window', aut.contentWindow)
          console.log('>>> after iframe loaded')
          debugTabState()
          resolve()
        }, 500)
      }
      aut.contentWindow.location.href = url
      activeTabIndex = 0
    })
  } else {
    // for popupwindows, just call openTab
    activeTabIndex = windowIndex
    return cy.openTab(url, { windowIndex, tabName }).then(() => {
      console.log('AFTER OPENTAB')
      activeTabIndex = windowIndex
    })
  }
})

// let popupcounter = 0

Cypress.Commands.add('openTab', (url, opts) => {
  opts = Object.assign(
    {
      timeout: null,
      // windowIndex: null,
      tabName: null,
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
      windowFeatures: null
    },
    opts
  )
  if (!opts.tabName) {
    throw new Error('please give your tab a name')
  }
  if (!myTabs[0]) {
    myTabs[0] = cy.state('window') // capture the root window if we haven't already
    myTabs[0].ATABNAME = myTabNames[0]
  }
  const w = Cypress.config('viewportWidth')
  const h = Cypress.config('viewportHeight')
  if (!opts.windowFeatures) {
    opts.windowFeatures = `width=${w}, height=${h}`
  }
  let indexNext = myTabs.length
  const nameIndex = myTabNames.indexOf(opts.tabName)
  console.warn('openTab', { nameIndex, indexNext, activeTabIndex })
  if (nameIndex > -1) {
    indexNext = nameIndex
  }
  myTabNames[indexNext] = opts.tabName
  function finalize() {
    // let windowName = 'popup' + performance.now();
    // let windowName = 'popup' + popupcounter;
    const windowName = 'popup' + opts.tabName
    const promise = new Cypress.Promise((resolve) => {
      console.warn('>>>> openTab %s "%s %s"', url, opts.windowFeatures, indexNext, opts.tabName)
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
      // popupcounter++
      const popup = myTabs[indexNext] ? myTabs[indexNext] : window.top.open(url, windowName, opts.windowFeatures)
      myTabs[indexNext] = popup
      myTabs[indexNext].ATABNAME = myTabNames[indexNext]
      // letting page enough time to load and set "document.domain = localhost"
      // so we can access it
      function checkReady() {
        // thought checking document.domain would work but it never seems to update
        // if(popup.document.domain !== "localhost"){
        // checking body length is important for chrome tho, otherwise it will try and execute tests on about:blank
        if (!popup.document.body || popup.document.body.innerHTML.length === 0) {
          setTimeout(() => {
            checkReady()
          }, 32) // arbitrary delay
        } else {
          cy.state('document', popup.document)
          cy.state('window', popup)
          console.warn('>>>> after openTab')
          debugTabState()
          resolve()
        }
      }
      checkReady()
    })
    return promise
  }
  activeTabIndex = indexNext
  if (myTabs[indexNext]) {
    cy.closeTab(indexNext).then(finalize)
    // return finalize()
  } else {
    return finalize()
  }
})

Cypress.Commands.add('switchToTab', (indexOrName) => {
  return new Cypress.Promise((resolve) => {
    const index = resolveIndexOrNameToIndex(indexOrName)
    console.warn('switchToTab', { index, indexOrName })
    activeTabIndex = index
    const winNext = myTabs[activeTabIndex]
    if (!winNext) {
      throw new Error('tab missing')
    }
    cy.state('document', winNext.document)
    cy.state('window', winNext)
    debugTabState()
    resolve()
  })
})

/* close all popup windows */
Cypress.Commands.add('closeAllTabs', () => {
  if (!myTabs.length) {
    return
  }
  myTabs.forEach((v, k) => {
    if (k > 0) {
      try {
        myTabs[k].close()
      } catch (e) {
        console.error(e)
      }
      myTabs[k] = null
    }
  })
  myTabNames.splice(1)
  myTabs.splice(1) // keep first one only
  // return to state 0 (main / root / original window)
  activeTabIndex = 0
  cy.state('document', myTabs[0].document)
  cy.state('window', myTabs[0])
})

function resolveIndexOrNameToIndex(indexOrName) {
  let index = parseInt(indexOrName) >= 0 ? indexOrName : activeTabIndex || 0
  const nameIndex = myTabNames.indexOf(indexOrName)
  if (nameIndex > -1) {
    index = nameIndex
  }
  return index
}

/* pass an index to close a specific window, otherwise, pass nothing to delete the most recently open window in the stack */
Cypress.Commands.add('closeTab', (indexOrName) => {
  const index = resolveIndexOrNameToIndex(indexOrName)
  console.warn('closeTab', { indexOrName, index })
  if (index === 0) {
    console.error('cant close root window')
    return
  }
  myTabs[index].close()
  myTabs[index] = null
  // NOTE we leave the null in the array so that other window index references aren't thrown off
  // NOTE we don't refocus any window here, that's up to you to call switchToTab() after close
  // unless there's no windows left, in which case we return you to window 0
  const filteredList = myTabs.filter((tab) => tab)
  if (filteredList.length === 1) {
    cy.switchToTab(0)
  }
  // TODO if there are trailing squential trailing nulls, we could probably safely drop them from
  // myTabs and myTabNames
  // cy.switchToTab(activeTabIndex)
})
