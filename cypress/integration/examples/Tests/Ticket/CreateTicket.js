/// <reference types="Cypress" />
import InboxTicketDetails from '../../Pages/TicketModule/InboxTicketDetails'

const ticketform = new InboxTicketDetails()
let ticketformdata
before(() => {
  cy.fixture('TicketFormValid.json').then((abc) => {
    ticketformdata = abc.Valid
  })
})
beforeEach(() => {
  cy.Login()
  cy.restoreLocalStorage()
  ticketform.sideNavTicket().click()
  ticketform.createNewTicketButton().click()
  cy.go(-1)
})

afterEach(() => {
  cy.saveLocalStorage()
  cy.wait(5000)
  cy.visit(Cypress.env('Dashboard'))
})

describe('Ticket Form', function () {
  it('To Field Search', function () {
    ticketform.toFieldDiv().within(() => {
      ticketform.toFieldInput().should('have.attr', 'aria-expanded', 'false')
      ticketform.toDivePlaceHolder().click().type(ticketformdata.To)
      cy.wait(300)
      ticketform
        .toFieldAfterEnteringText()
        .should('have.attr', 'aria-label', ticketformdata.To)
        .and('have.text', ticketformdata.To)
        .and('have.attr', 'title', 'Administrator')
      ticketform.cancel().click()
    })
  })

  it('Create ticket Valid', function () {
    ticketform.toDivePlaceHolder().type(ticketformdata.To).wait(200)
    ticketform.toFieldAfterEnteringText().click()
    ticketform.title().type(ticketformdata.Title)
    ticketform.description().type(ticketformdata.Description)
    ticketform.categoryDivePlaceHolder().type(ticketformdata.Category + '{enter}')
    ticketform.priorityDivePlaceHolder().type(ticketformdata.Priority + '{enter}')
    ticketform.submit().click().wait(1000)
  })

  it('CC Field Search', function () {
    ticketform.ccDiv().within(() => {
      ticketform.ccFieldInput().should('have.attr', 'aria-expanded', 'false')
      ticketform.ccDivePlaceHolder().click().type(ticketformdata.CC)
      cy.wait(300)
      ticketform
        .ccFieldAfterEnteringText()
        .should('have.attr', 'aria-label', ticketformdata.CC)
        .and('have.text', ticketformdata.CC)
        .and('have.attr', 'title', 'Software Engineer')
      ticketform.cancel().click()
    })
  })

  it.only('Category Field Search', function () {
    ticketform.categoryDiv().within(() => {
      ticketform.categoryFieldInput().should('have.attr', 'aria-expanded', 'false')
      ticketform.categoryDivePlaceHolder().click().type(ticketformdata.Category)
      cy.wait(300)
      ticketform
        .categoryFieldAfterEnteringText()
        .should('have.attr', 'aria-label', ticketformdata.Category)
        .and('have.text', ticketformdata.Category)
      ticketform.cancel().click()
    })
  })

  it('Priority Field Search', function () {
    ticketform.priorityDiv().within(() => {
      ticketform.priorityFieldInput().should('have.attr', 'aria-expanded', 'false')
      ticketform.priorityDivePlaceHolder().click().type(ticketformdata.Priority)
      cy.wait(300)
      ticketform
        .priorityFieldAfterEnteringText()
        .should('have.attr', 'aria-label', ticketformdata.Priority)
        .and('have.text', ticketformdata.Priority)
      ticketform.cancel().click()
    })
  })

  it('Submit form blank and check error messages', function () {
    ticketform.submit().should('have.text', 'Send Ticket').click()
    ticketform
      .assigneError()
      .should('be.visible')
      .and('have.css', 'color', 'rgb(244, 67, 54)')
      .and('have.text', 'Assignee is required')
    ticketform
      .titleError()
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.text', 'Subject is required')
    ticketform
      .descriptionError()
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.text', 'Description is required')
    ticketform
      .priorityError()
      .should('be.visible')
      .and('have.css', 'color', 'rgb(244, 67, 54)')
      .and('have.text', 'Please specify priority')
  })
})
