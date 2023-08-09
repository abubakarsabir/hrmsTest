import Leaves from '../../Pages/Leaves'
import NavBar from '../../Pages/NavBar'

beforeEach(() => {
  cy.Login()
})

describe('Smoke:Leave Test', () => {
  const leavespage = new Leaves()
  const navbar = new NavBar()

  it('C43: Users can add policy.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.leavePolicy().should('be.visible').click()
    leavespage.addLeavePolicy().should('be.visible').click()
    leavespage.typeofLeavep().should('be.visible').click()
    leavespage.selectTypeofLeave().should('be.visible').click()
    leavespage.typeOfEmployment().should('be.visible').click()
    leavespage.selectTypeOfEmployment().should('be.visible').click()
    leavespage.year().should('be.visible').click()
    leavespage.selectYear().should('be.visible').click()
    leavespage.quota().should('be.visible').type('100')
    leavespage.leavePolicy().should('be.visible')
    leavespage.submit().should('be.visible').click()
    cy.wait(500)
  })

  it('C38: User can apply leave.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.applyForLeave().click()
    leavespage.leaveApplication().should('be.visible')
    leavespage.reasonForLeave().should('be.visible').type('My testing leaves')
    leavespage.typeOfLeave().should('be.visible').click()
    leavespage.annualOption().should('be.visible').click()
    leavespage.leaveDate().should('be.visible').click()
    cy.intercept('POST', 'leaves').as('postleaves')
    leavespage.okBtn().should('be.visible').click()
    leavespage.applyForLeavebtn().should('be.visible').click()
    cy.wait('@postleaves')
    cy.get('@postleaves').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })




  it('C39: User can search leave by using differemt keywords.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.leaveApprovals().should('be.visible').click()
    leavespage.searchLeave().should('be.visible').type('Annual')
  })

  it('C41: User can edit leave.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.leaveApprovals().should('be.visible').click()
    leavespage.editleavebtn().should('be.visible').click()
    leavespage.reasonLeaveEdit().should('be.visible').type('Edited')
    leavespage.updateBtn().should('be.visible').click()
  })

  it('C40: User can approve or reject leave.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.leaveApprovals().should('be.visible').click()
    leavespage.leavesinList().should('be.visible').click()
    cy.wait(500)
    cy.intercept('POST', 'leave_statuses').as('postleavesstatuses')
    leavespage.ApproveLeaveBox().last().scrollIntoView().should('be.visible').click()
    leavespage.leaveApprovalSubmit().scrollIntoView().should('be.visible').click()
    cy.wait('@postleavesstatuses')
    cy.get('@postleavesstatuses').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C42: User can search leaves by using keyword, year and date range in leave summary.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.leaveSummary().should('be.visible').click()
    leavespage.leaveSearch().should('be.visible')
    leavespage.leaveYear().should('be.visible')
    leavespage.dateFilter().should('be.visible')
  })

  it('C44: Authorized users can add leave manually of others user.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.mannualAdjustment().should('be.visible').click()
    leavespage.addLeave().should('be.visible').click()
    leavespage.selectAUserBox().should('be.visible').click()
    leavespage.selectAUser().scrollIntoView().should('be.visible').click()
    cy.wait(500)
    leavespage.selectYearBox().should('be.visible').click()
    leavespage.selectYear().should('be.visible').click()
    cy.wait(500)
    leavespage.ReasonForLeaveAdd().should('be.visible').type('Testing leave')
    leavespage.typeOfLeaveAdd().scrollIntoView().should('be.visible').click()
    leavespage.typeOfLeaveSelect().should('be.visible').click()
    leavespage.calendar().should('be.visible').click()
    leavespage.okBtnCalender().should('be.visible').click()
    leavespage.addLeaveAdd().scrollIntoView().should('be.visible').click()
  })

  it('C45: Users can add holiday.', () => {
    navbar.sideNavLeave().should('be.visible').click()
    cy.url().should('include', 'leaves')
    leavespage.holidaysTab().should('be.visible').click()
    leavespage.addHoliday().should('be.visible').click()
    leavespage.addHolidayHeading().should('be.visible')
    leavespage.nameofHoliday().should('be.visible').type('Testing Holiday')
    leavespage.calendarIcon().should('be.visible').click()
    leavespage.okBtnCalender().should('be.visible').click()
    cy.intercept('POST', 'holidays').as('postholidays')
    leavespage.addHolidaybtn().should('be.visible').click()
    cy.wait('@postholidays')
    cy.get('@postholidays').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })
})
