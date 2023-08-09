/// <reference types="Cypress" />
import DashboardDetail from '../../Pages/DashboardDetail'
import SignInDetail from '../../Pages/SignInDetail'
import InboxTicketDetail from '../../Pages/TicketModule/InboxTicketDetails'
import SentTicketDetail from '../../Pages/TicketModule/SentTicketDetail'

const ticket = new InboxTicketDetail()
const dashboard = new DashboardDetail()
const signinpage = new SignInDetail()
const sentTicket = new SentTicketDetail()
let users

before(() => {
  cy.Login()
  cy.fixture('users.json').then((user) => {
    users = user
  })
})

beforeEach(() => {
  cy.restoreLocalStorage()
  ticket.sideNavTicket().click()
  sentTicket.sentTab().click()
  cy.go(-1)
})

afterEach(() => {
  cy.saveLocalStorage()
  cy.visit(Cypress.env('Dashboard'))
})

describe('Ticket inbox visibility of elements', function () {
  it('Header Text', function () {
    ticket.title().should('be.visible').and('have.text', 'Ticket Centre').and('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it.only('CC user edit ticket or other CC users', function () {
    cy.Logout()
  })

  it('Ticket inbox filter', function () {
    sentTicket.filterButton().click()
    sentTicket.categoryCheckBox().should('contain', 'Category').children().check()
    sentTicket.filterButton().click()
    sentTicket.categoryDropDown().click({ force: true })
    sentTicket
      .hardwareCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
    sentTicket.categoryDropDown().click({ force: true })
    sentTicket
      .totalTicket()
      .invoke('text')
      .then((text) => {
        const splitString = text.split(' ')
        for (let index = 0; index < splitString[4]; index++) {
          sentTicket.ticketList().within(() => {
            sentTicket.ticketListXpath(index + 1).within(() => {
              cy.get('.category-label').should('have.text', 'Stationary')
            })
          })
        }
      })
  })

  it('Hardware category is showing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.categoryCheckBox().should('contain', 'Category').children().check()
    sentTicket.filterButton().click()
    sentTicket.categoryDropDown().click({ force: true })
    sentTicket
      .hardwareCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.categoryDropDown().click({ force: true })
    cy.SentMatch('.category-label', 'Hardware')
  })

  it('Stationary category is showing in tickets', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.categoryCheckBox().should('contain', 'Category').children().check()
    sentTicket.filterButton().click()
    sentTicket.categoryDropDown().click({ force: true })
    sentTicket
      .stationaryCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.categoryDropDown().click({ force: true })
    cy.SentMatch('.category-label', 'Stationary')
  })

  it('Chairs category is showing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.categoryCheckBox().should('contain', 'Category').children().check()
    sentTicket.filterButton().click()
    sentTicket.categoryDropDown().click({ force: true })
    sentTicket
      .chairCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.categoryDropDown().click({ force: true })
    cy.SentMatch('.category-label', 'Chairs')
  })

  it('Others category is showing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.categoryCheckBox().should('contain', 'Category').children().check()
    sentTicket.filterButton().click()
    sentTicket.categoryDropDown().click({ force: true })
    sentTicket
      .otherCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.categoryDropDown().click({ force: true })
    cy.SentMatch('.category-label', 'Other')
  })

  it('open Status sentTicket showing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.statusCheckBox().should('contain', 'Status').children().check()
    sentTicket.filterButton().click()
    sentTicket.statusDropDown().click({ force: true })
    sentTicket
      .openStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.statusDropDown().click({ force: true })
    cy.SentMatch('.ticket-status', 'Open')
  })

  it('In Progress Status ticket showing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.statusCheckBox().should('contain', 'Status').children().check()
    sentTicket.filterButton().click()
    sentTicket.statusDropDown().click({ force: true })
    sentTicket
      .inProgressStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.statusDropDown().click({ force: true })
    cy.SentMatch('.sentTicket-status', 'In Progress')
  })

  it('Completed Status ticket showing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.statusCheckBox().should('contain', 'Status').children().check()
    sentTicket.filterButton().click()
    sentTicket.statusDropDown().click({ force: true })
    sentTicket
      .completeStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.statusDropDown().click({ force: true })
    cy.SentMatch('.ticket-status', 'Completed')
  })

  it('Closed Status ticket showing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.statusCheckBox().should('contain', 'Status').children().check()
    sentTicket.filterButton().click()
    sentTicket.statusDropDown().click({ force: true })
    sentTicket
      .closedStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.statusDropDown().click({ force: true })
    cy.SentMatch('.ticket-status', 'Closed')
  })

  it('Critical Priority ticket Shwoing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.priorityCheckBox().should('contain', 'Priority').children().check()
    sentTicket.filterButton().click()
    cy.wait(1000)
    sentTicket.priorityDropDown().click({ force: true })
    sentTicket
      .criticalPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.priorityDropDown().click({ force: true })
    cy.SentMatch('.ticket-priority', 'Critical')
  })

  it('High Priority ticket Shwoing', function () {
    cy.get('body').should('be.visible')

    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.priorityCheckBox().should('contain', 'Priority').children().check()
    sentTicket.filterButton().click()
    cy.wait(1000)
    sentTicket.priorityDropDown().click({ force: true })
    sentTicket
      .highPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.priorityDropDown().click({ force: true })
    cy.SentMatch('.ticket-priority', 'High')
  })

  it('Medium Priority ticket Shwoing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.priorityCheckBox().should('contain', 'Priority').children().check()
    sentTicket.filterButton().click()
    cy.wait(1000)
    sentTicket.priorityDropDown().click({ force: true })
    sentTicket
      .mediumPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.priorityDropDown().click({ force: true })
    cy.SentMatch('.ticket-priority', 'Medium')
  })

  it('Low Priority ticket in Inbox Shwoing', function () {
    sentTicket.filterButton().click()
    sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()
    sentTicket.priorityCheckBox().should('contain', 'Priority').children().check()
    sentTicket.filterButton().click()
    cy.wait(1000)
    sentTicket.priorityDropDown().click({ force: true })
    sentTicket
      .lowPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    sentTicket.priorityDropDown().click({ force: true })
    cy.SentMatch('.ticket-priority', 'Low')
  })

  it('Search ticket with title', function () {
    sentTicket.inboxSearch().click().should('contain', 'Search by assignee name or title')
    sentTicket.inboxSearch().type('Test ticket')
    cy.wait(2000)
    sentTicket.ticketList().then((list) => {
      if (list.find('.error-message').is(':visible')) {
        cy.get('.error-message').should('have.text', 'No Record Found...')
      } else {
        cy.get('.ticket-title').children().should('contain', 'Test ticket')
      }
    })
  })

  it('Search ticket with Creator Name', function () {
    sentTicket.inboxSearch().type('Test ticket')
    cy.wait(1000)
    sentTicket.ticketList().then((list) => {
      if (list.find('.error-message').is(':visible')) {
        cy.get('.error-message').should('have.text', 'No Record Found...')
      } else {
        cy.get('.minor-detail').children().should('contain', 'Faisal Waleed')
      }
    })
  })

  it('Create New Ticket Button visible or working', function () {
    sentTicket
      .createNewTicketButton()
      .should('be.visible')
      .and('have.text', ' New Ticket ')
      .and('contain', 'New Ticket')
      .and('not.be.disabled')
      .and('have.css', 'margin-top', '21px')
      .click()
    sentTicket.ticketModalheaderText().should('have.text', 'Ticket Centre')
  })

  it('CC User Update CC users', function () {
    let title
    sentTicket.ticketFullXpath(1).click().wait(500)
    cy.get('.ticket-user').children().eq(0).should('contain.text', 'CC Users:')

    cy.get('.ticket-user')
      .children('.ticket-cc')
      .then((ccUsersCount) => {
        console.log('CC users count is' + ccUsersCount.length)
        cy.get(ccUsersCount[0])
          .children()
          .eq(1)
          .children()
          .eq(0)
          .invoke('text')
          .then(() => {
            cy.get('.editor')
              .type('@Anas Shahid')
              .find('.rdw-suggestion-dropdown')
              .should('have.text', 'Anas Shahid')
              .click()
            cy.wait(200)
            cy.get('.create-comment > button').click().wait(200)
            cy.get('.ticket-title')
              .children()
              .eq(1)
              .invoke('text')
              .then((ticketTitle) => {
                title = ticketTitle
                console.log('Title is this' + title)
                dashboard.profileImage().children().eq(2).click()
                dashboard.logout().should('have.text', 'Logout').click()
                cy.wait(500)
                cy.url().should('contain', Cypress.env('Login'))
                signinpage.emailInput().type(users.NormalUser.email)
                signinpage.passwordInput().type(users.NormalUser.password)
                signinpage.signInButton().click().wait(1000)
                cy.url().should('contain', Cypress.env('Dashboard'))
                sentTicket.sideNavTicket().click()
                cy.wait(500)
                sentTicket.sentTab().click()
                sentTicket.filterButton().click()
                sentTicket.statusCheckBox().should('contain', 'Status').children().uncheck()

                sentTicket.filterButton().click()
                sentTicket.inboxSearch().type(title).wait(500)
                sentTicket.threeDots(1).should('be.visible').and('be.disabled')
              })
          })
      })
  })
})

it.skip('TT-22 By Default open and inProgress ticket should be selected', function () {
  let page = 1
  let ticketnumber = 1
  ticket
    .totalTicket()
    .invoke('text')
    .then((totalTicketString) => {
      const totalTicketArray = totalTicketString.split(' ')
      console.log(totalTicketArray['Total Tickets' + 4])
      for (let index = 1; index <= totalTicketArray[4]; index++) {
        if (index === 20 * page) {
          ticketnumber = 1
          page++
          ticket.nextPage(page).click()
        } else {
          ticket.allTicketStatus(ticketnumber).then((element) => {
            expect(element.children().text()).to.be.oneOf(['Open', 'In Progress'])
            ticketnumber++
          })
        }
      }
    })
})
