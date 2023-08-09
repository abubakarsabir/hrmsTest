import Claims from '../../Pages/Claims'
import DashboardDetail from '../../Pages/DashboardDetail'
import EditProfile from '../../Pages/EditProfile'
import Leaves from '../../Pages/Leaves'
import InboxTicketDetails from '../../Pages/TicketModule/InboxTicketDetails'
import UserProfile from '../../Pages/UserProfile'

beforeEach(() => {
  cy.Login()
})

afterEach(() => {
  cy.saveLocalStorage()
  cy.visit(Cypress.env('Dashboard'))
})

describe('Smoke:Dashboard Test Suit', () => {
  const dashboardpage = new DashboardDetail()
  const usersprofilepage = new UserProfile()
  const leavespage = new Leaves()
  const ticketspage = new InboxTicketDetails()
  const claimspage = new Claims()
  const editprofilepage = new EditProfile()

  it('C9: Users can view oe open the list of users who are on leave.', () => {
    dashboardpage.outOfOfficeWidget().should('be.visible')
    dashboardpage.outOfOfficeEmptyIndicator().should('be.visible')
  })

  it('C10: Users can view and open the list of new users', () => {
    dashboardpage.newArrivalWidget().should('be.visible')
    dashboardpage.newArrivalWidget().then((newArrival) => {
      if (newArrival.find(dashboardpage.newArrivalEmptyIndicator()).is(':visible')) {
        cy.get(newArrival).find('.error-msg').children().should('have.text', 'No new user in last 14 days')
      } else {
        dashboardpage.newArrivalUser().should('be.visible')
      }
    })
  })

  it('C11: In every widgets texts are properly shown.', () => {
    dashboardpage.welcomeWidget().should('be.visible')
    dashboardpage.outOfOfficeWidget().should('be.visible')
    dashboardpage.leaveWidget().should('be.visible')
    dashboardpage.newArrivalWidget().should('be.visible')
    dashboardpage.ticketWidget().should('be.visible')
    dashboardpage.claimWidget().should('be.visible')
    dashboardpage.dnarWidget().should('be.visible')
    dashboardpage.upcomingPublicHolidayWidget().should('be.visible')
    dashboardpage.leaveWidgetText().should('be.visible')
    dashboardpage.ticketWidgetText().should('be.visible')
    dashboardpage.dnarWidgetText().should('be.visible')
  })

  it('C12: Users can view and open pending leave approvals.', () => {
    dashboardpage.leaveWidget().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.leaveApprovals().should('be.visible')
  })

  it('C13: Users can view or open active assigned tickets.', () => {
    dashboardpage.ticketWidget().should('be.visible').click()
    cy.url().should('include', 'tickets')
    ticketspage.title().should('be.visible')
    ticketspage.ticketInbox().should('be.visible')
  })

  it('C14: Users can view and open pending claims approvals.', () => {
    dashboardpage.claimWidget().should('be.visible').click()
    cy.url().should('include', 'claims')
    claimspage.claimsHeading().should('be.visible')
    claimspage.claimsApprovals().should('be.visible')
  })

  it('C15:Verify that user can view or open Upcoming Public Holiday', () => {
    dashboardpage.upcomingPublicHolidayWidget().should('be.visible')
  })

  it('C16:Verify that profile icon must be visible.', () => {
    dashboardpage.profileImage().should('be.visible')
  })

  it('C17:Verify that profile must be clickable and working fine.', () => {
    dashboardpage.profileImage().should('be.visible').click()
    cy.url().should('include', 'profile')
    usersprofilepage.UsernameHeading().should('be.visible')
    usersprofilepage.AboutMeHeading().should('be.visible')
    usersprofilepage.ReportingToHeading().should('be.visible')
    usersprofilepage.LeadHeading().should('be.visible')
  })

  it('C66:Verify that user can edit profile', () => {
    dashboardpage.profileImage().should('be.visible').click()
    cy.url().should('include', 'profile')
    usersprofilepage.UsernameHeading().should('be.visible')
    usersprofilepage.AboutMeHeading().should('be.visible')
    usersprofilepage.ReportingToHeading().should('be.visible')
    usersprofilepage.LeadHeading().should('be.visible')
    usersprofilepage.editProfile().should('be.visible').click()
    editprofilepage.keepProfileText().should('be.visible')
    editprofilepage.mailAddress().should('be.visible').type('Edited')
    editprofilepage.updateBtn().should('be.visible').click()
  })
})
