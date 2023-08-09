import NavBar from '../../Pages/NavBar'
import AllTickets from '../../Pages/TicketModule/AllTickets'
import CreateTicketForm from '../../Pages/TicketModule/CreateTicketForm'
import SentTicketDetail from '../../Pages/TicketModule/SentTicketDetail'

beforeEach(() => {
  cy.Login()
})

afterEach(() => {
  cy.saveLocalStorage()
})

describe('Smoke:Tickets Test', () => {
  const navbar = new NavBar()
  const ticket = new CreateTicketForm()
  const sendticket = new SentTicketDetail()
  const allticket = new AllTickets()

  it('C34: User can add new tickets.', () => {
    navbar.sideNavTicket().should('be.visible').first().click()
    ticket.ticketCenterHeading().should('be.visible')
    sendticket.sentTab().should('be.visible')
    allticket.allTickets().should('be.visible')
    ticket.createTicketBtn().should('be.visible').click()
    ticket.newTicketHeading().should('be.visible')
    ticket.toFieldDiv().should('be.visible').click()
    ticket.selectToUser().should('be.visible').click()
    ticket.title().should('be.visible').type('Testing Ticket')
    ticket.description().scrollIntoView().should('be.visible').type('Testing Description')
    ticket.categoryFieldInput().scrollIntoView().should('be.visible').click()
    ticket.categoryFeildValue().should('be.visible').click()
    ticket.priorityDiv().should('be.visible').click()
    ticket.prioirtyValue().should('be.visible').click()
    cy.intercept('POST', 'tickets').as('postticket')
    ticket.submit().scrollIntoView().should('be.visible').click()
    cy.wait('@postticket')
    cy.get('@postticket').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C35: Users can search ticket by using keyword and filters in inbox and sent.', () => {
    navbar.sideNavTicket().should('be.visible').first().click()
    ticket.ticketCenterHeading().should('be.visible')
    sendticket.sentTab().should('be.visible').click()
    sendticket.search().should('be.visible').type('Testing Ticket')
    sendticket.serachResult().first().should('be.visible')
  })

  it('C36: Users can search all tickets by applying multiple filters.', () => {
    navbar.sideNavTicket().should('be.visible').first().click()
    ticket.ticketCenterHeading().should('be.visible')
    allticket.allTickets().should('be.visible').click()
    allticket.assignedTo().should('be.visible')
    allticket.createdBy().should('be.visible')
    allticket.searchBtn().should('be.visible').click()
    allticket.serachResult().scrollIntoView().should('be.visible')
  })

  it('C37: Users can change status of tickets(In Progress, Completed and Reopened).', () => {
    navbar.sideNavTicket().should('be.visible').first().click()
    ticket.ticketCenterHeading().should('be.visible')
    sendticket.sentTab().should('be.visible').click()
    sendticket.threeDots().should('be.visible').click()
    sendticket.changeStatus().should('be.visible').click()
  })
})
