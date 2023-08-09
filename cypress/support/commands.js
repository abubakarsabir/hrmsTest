import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
import { register } from 'cypress-match-screenshot'

import DashboardDetail from '../integration/examples/Pages/DashboardDetail'
import InboxTicketDetails from '../integration/examples/Pages/TicketModule/InboxTicketDetails'
import SentTicketDetail from '../integration/examples/Pages/TicketModule/SentTicketDetail'

import 'cypress-iframe'
import 'cypress-localstorage-commands'

addMatchImageSnapshotCommand()
register()
const CompareSnapshotCommand = require('cypress-visual-regression/dist/command')

CompareSnapshotCommand()
const sentTicket = new SentTicketDetail()
const dashboard = new DashboardDetail()
const inboxTicket = new InboxTicketDetails()

Cypress.Commands.add('MatchFilterResult', (ElementLocation, ElementValue) => {
  let page = 1
  let totalTicketArray = []
  inboxTicket.ticketList().then((list) => {
    if (list.find('.error-message').is(':visible')) {
      cy.get(list).find('.error-message').should('have.text', 'No sentTicket is Assigned to you')
    } else {
      inboxTicket
        .totalTicket()
        .invoke('text')
        .then((totalTicketString) => {
          totalTicketArray = totalTicketString.split(' ')
          let index = 1
          for (let i = 1; i <= totalTicketArray[4]; i++) {
            inboxTicket.ticketFullXpath(index).within((element) => {
              cy.get(element).children().should('contain', ElementValue)
            })

            if (index % 20 === 0) {
              page++
              console.log('Clicking Next button at index value ' + index)
              cy.get('[data-testid="tickets-inbox-pagination"]').within(() => {
                console.log('Page value is' + page)
                cy.get('.rc-pagination-next > .rc-pagination-item-link').click({ force: true }).wait(200)
              })
              index = 1
            } else {
              index++
            }
          }
        })
    }
  })
})

Cypress.Commands.add('SentMatch', (ElementLocation, ElementValue) => {
  let page = 1
  let totalTicketArray = []
  sentTicket.ticketList().then((list) => {
    if (list.find('.error-message').is(':visible')) {
      cy.get(list).find('.error-message').should('have.text', 'No Tickets made by you ...')
    } else {
      sentTicket
        .totalTicket()
        .invoke('text')
        .then((totalTicketString) => {
          totalTicketArray = totalTicketString.split(' ')
          let index = 1
          for (let i = 1; i <= totalTicketArray[4]; i++) {
            sentTicket.ticketFullXpath(index).within((element) => {
              cy.get(element).children().should('contain', ElementValue)
            })

            if (index % 20 === 0) {
              page++
              console.log('Clicking Next button at index value ' + index)
              cy.get('[data-testid="tickets-inbox-pagination"]').within(() => {
                console.log('Page value is' + page)
                cy.get('.rc-pagination-next > .rc-pagination-item-link').click({ force: true }).wait(200)
              })
              index = 1
            } else {
              index++
            }
          }
        })
    }
  })
})

Cypress.Commands.add('ApplyFilter', (filterSelect, filterDroDown, dropDownValue) => {
  console.log('You are here enter to commands to')
  inboxTicket.filterButton().click()
  console.log('You are here in Commands')
  filterSelect.click()
  inboxTicket.filterButton().click()
  filterDroDown.click({ force: true })
  dropDownValue.trigger('mouserover').should()
  filterDroDown.click({ force: true })
  inboxTicket.categoryDropDown().click({ force: true })
})

Cypress.Commands.add('Logout', () => {
  dashboard.logout().click({ force: true })
  cy.url().should('contain', Cypress.env('Login'))
})

Cypress.Commands.add('Login', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/auth/sign_in',
    body: {
      email: 'admin@devsinc.com',
      password: 'C0mplexpass'
    }
  })
    .its('headers')
    .then((res) => {
      console.log('Its running')
      const client = res.client
      localStorage.setItem('uid', res.uid)
      localStorage.setItem('client', client)
      localStorage.setItem('access-token', res['access-token'])
      cy.visit(Cypress.env('Dashboard'))
    })
})
Cypress.Commands.add('forceVisit', (url) => {
  cy.window().then((win) => {
    return win.open(url, '_self')
  })
})
