/// <reference types="Cypress" />
import DashboardDetail from '../../Pages/DashboardDetail'
import SignInDetail from '../../Pages/SignInDetail'
import InboxTicketDetail from '../../Pages/TicketModule/InboxTicketDetails'

const ticket = new InboxTicketDetail()
const dashboard = new DashboardDetail()
const signinpage = new SignInDetail()
let users

before(() => {
  cy.Login()
  cy.fixture('users.json').then((user) => {
    users = user
  })
})

beforeEach(() => {
  cy.restoreLocalStorage()
  ticket.sideNavTicket().click({ multiple: true })
  cy.wait(5000)
})

afterEach(() => {
  cy.saveLocalStorage()
  cy.visit(Cypress.env('Dashboard'))
})

describe('Ticket inbox visibility of elements', function () {
  it('Header Text', function () {
    ticket.title().should('be.visible').and('have.text', 'Ticket Centre').and('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Ticket inbox filter', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.categoryCheckBox().should('contain', 'Category').children().check()
    ticket.filterButton().click()
    ticket.categoryDropDown().click({ force: true })
    ticket.hardwareCategory().trigger('mouseover').should('have.css', 'background-color', 'rgb(88, 151, 251)').click()
    ticket.categoryDropDown().click({ force: true })
    ticket
      .totalTicket()
      .invoke('text')
      .then((text) => {
        const splitString = text.split(' ')
        for (let index = 0; index < splitString[4]; index++) {
          ticket.ticketList().within(() => {
            ticket.ticketListXpath(index + 1).within(() => {
              cy.get('.category-label').should('have.text', 'Hardware')
            })
          })
        }
      })
  })

  it('Hardware category is showing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.categoryCheckBox().should('contain', 'Category').children().check()
    ticket.filterButton().click()
    ticket.categoryDropDown().click({ force: true })
    ticket
      .hardwareCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.categoryDropDown().click({ force: true })
    cy.MatchFilterResult('.category-label', 'Hardware')
  })

  it('Stationary category is showing in tickets', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.categoryCheckBox().should('contain', 'Category').children().check()
    ticket.filterButton().click()
    ticket.categoryDropDown().click({ force: true })
    ticket
      .stationaryCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.categoryDropDown().click({ force: true })
    cy.MatchFilterResult('.category-label', 'Stationary')
  })

  it('Chairs category is showing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.categoryCheckBox().should('contain', 'Category').children().check()
    ticket.filterButton().click()
    ticket.categoryDropDown().click({ force: true })
    ticket
      .chairCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.categoryDropDown().click({ force: true })
    cy.MatchFilterResult('.category-label', 'Chairs')
  })

  it('Others category is showing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.categoryCheckBox().should('contain', 'Category').children().check()
    ticket.filterButton().click()
    ticket.categoryDropDown().click({ force: true })
    ticket
      .otherCategory()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.categoryDropDown().click({ force: true })
    cy.MatchFilterResult('.category-label', 'Other')
  })

  it('open Status ticket showing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.statusCheckBox().should('contain', 'Status').children().check()
    ticket.filterButton().click()
    ticket.statusDropDown().click({ force: true })
    ticket
      .openStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.statusDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-status', 'Open')
  })

  it('In Progress Status ticket showing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.statusCheckBox().should('contain', 'Status').children().check()
    ticket.filterButton().click()
    ticket.statusDropDown().click({ force: true })
    ticket
      .inProgressStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.statusDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-status', 'In Progress')
  })

  it('Completed Status ticket showing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.statusCheckBox().should('contain', 'Status').children().check()
    ticket.filterButton().click()
    ticket.statusDropDown().click({ force: true })
    ticket
      .completeStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.statusDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-status', 'Completed')
  })

  it('Closed Status ticket showing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.statusCheckBox().should('contain', 'Status').children().check()
    ticket.filterButton().click()
    ticket.statusDropDown().click({ force: true })
    ticket
      .closedStatus()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.statusDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-status', 'Closed')
  })

  it('Critical Priority ticket Shwoing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.priorityCheckBox().should('contain', 'Priority').children().check()
    ticket.filterButton().click()
    cy.wait(1000)
    ticket.priorityDropDown().click({ force: true })
    ticket
      .criticalPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.priorityDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-priority', 'Critical')
  })

  it('High Priority ticket Shwoing', function () {
    cy.get('body').should('be.visible')
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.priorityCheckBox().should('contain', 'Priority').children().check()
    ticket.filterButton().click()
    cy.wait(1000)
    ticket.priorityDropDown().click({ force: true })
    ticket
      .highPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.priorityDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-priority', 'High')
  })

  it('Medium Priority ticket Shwoing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.priorityCheckBox().should('contain', 'Priority').children().check()
    ticket.filterButton().click()
    cy.wait(1000)
    ticket.priorityDropDown().click({ force: true })
    ticket
      .mediumPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.priorityDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-priority', 'Medium')
  })

  it('Low Priority ticket Shwoing', function () {
    ticket.filterButton().click()
    ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
    ticket.priorityCheckBox().should('contain', 'Priority').children().check()
    ticket.filterButton().click()
    cy.wait(1000)
    ticket.priorityDropDown().click({ force: true })
    ticket
      .lowPriority()
      .trigger('mouseover')
      .should('have.css', 'background-color', 'rgb(88, 151, 251)')
      .click()
      .wait(500)
    ticket.priorityDropDown().click({ force: true })
    cy.MatchFilterResult('.ticket-priority', 'Low')
  })

  it('Search ticket with title', function () {
    ticket.inboxSearch().click().should('contain', 'Search by creator name or title')
    ticket.inboxSearch().type('Test ticket')
    cy.wait(2000)
    ticket.ticketList().then((list) => {
      if (list.find('.error-message').is(':visible')) {
        cy.get('.error-message').should('have.text', 'No Ticket assigned to you')
      } else {
        cy.get('.ticket-title').children().should('contain', 'Test ticket')
      }
    })
  })

  it('Search ticket with Creator Name', function () {
    ticket.inboxSearch().type('Test ticket')
    cy.wait(1000)
    ticket.ticketList().then((list) => {
      if (list.find('.error-message').is(':visible')) {
        cy.get('.error-message').should('have.text', 'No Ticket assigned to you')
      } else {
        cy.get('.minor-detail').children().should('contain', 'Faisal Waleed')
      }
    })
  })

  it('Create New Ticket Button visible or working', function () {
    ticket
      .createNewTicketButton()
      .should('be.visible')
      .and('have.text', ' New Ticket ')
      .and('contain', 'New Ticket')
      .and('not.be.disabled')
      .and('have.css', 'margin-top', '-8px')
      .click()
    ticket.ticketModalheaderText().should('have.text', 'New Ticket')
  })

  it.only('CC User Update CC users', function () {
    ticket.ticketListXpath(1).click().wait(500)
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
            //cy.get('.editor').type('@Aqib Butt')

            // cy.get('div[data-contents="true"]').type('@A{enter}')
            cy.xpath('//div[@data-contents="true"]').click({ force: true }).type('@Abubakar{enter}')

            cy.get('span[class="fa fa-send icon"]').click()

            //.should('have.text', 'Aqib Butt').click()
            cy.wait(200)
            cy.get('.create-comment > button').click().wait(200)

            //.ticket-title
            //div[class='ticket-title'] p
            cy.get('div[class="ticket-title"] p')
              .invoke('text')
              .then((ticketTitle) => {
                const title = ticketTitle
                console.log('Title is this' + title)
                dashboard.profileImage().children().eq(2).click()
                dashboard.logout().should('have.text', 'Logout').click()
                cy.wait(500)
                cy.url().should('contain', Cypress.env('Login'))
                signinpage.emailInput().type(users.NormalUser.email)
                signinpage.passwordInput().type(users.NormalUser.password)
                signinpage.signInButton().click().wait(1000)
                cy.url().should('contain', Cypress.env('Dashboard'))
                ticket.sideNavTicket().click()
                cy.wait(500)
                ticket.filterButton().click()
                ticket.statusCheckBox().should('contain', 'Status').children().uncheck()
                ticket.asssignedOnlyCheckBox().should('contain', 'Assigned').children().uncheck()
                ticket.filterButton().click()
                ticket.inboxSearch().type(title).wait(500)
                ticket.threeDots().should('be.visible')
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
          ticket.nextPage(page).click({ force: true })
        } else {
          ticket.allTicketStatus(ticketnumber).then((element) => {
            expect(element.children().text()).to.be.oneOf(['Open', 'In Progress'])
            ticketnumber++
          })
        }
      }
    })
})
