import Claims from '../../Pages/Claims'
import NavBar from '../../Pages/NavBar'

import 'cypress-file-upload'

beforeEach(() => {
  cy.Login()
})

describe('Smoke:Claims Test', () => {
  const navbar = new NavBar()
  const claims = new Claims()

  it('C46: User can add new claim.', () => {
    navbar.sideNavClaim().should('be.visible').click()
    cy.url().should('include', '/claims')
    claims.claimsHeading().should('be.visible')
    claims.addNewClaim().should('be.visible').click()
    claims.claimType().should('be.visible').click()
    claims.claimTypeOption().should('be.visible').click()
    claims.dateClaims().should('be.visible').click()
    claims.selectDate().should('be.visible').click()
    claims.totalAmount().should('be.visible').type('1000')
    claims.descriptionBox().scrollIntoView().should('be.visible').type('GYM')
    claims.uploadImage().scrollIntoView().attachFile('bill.jpg')
    claims.saveBtn().scrollIntoView().should('be.visible').click()
    cy.wait(500)
  })

  it('C49: Users can search claims by using category filter', () => {
    navbar.sideNavClaim().should('be.visible').click()
    cy.url().should('include', '/claims')
    claims.claimsHeading().should('be.visible')
    claims.categoryTab().should('be.visible').click()
    claims.selectCategory().should('be.visible').click()
    claims.categoryFilterResult().should('be.visible')
  })

  it('C50: Users can search claim by using status filter', () => {
    navbar.sideNavClaim().should('be.visible').click()
    cy.url().should('include', '/claims')
    claims.claimsHeading().should('be.visible')
    claims.statusTab().should('be.visible').click()
    claims.pendingLead().should('be.visible').click()
    claims.pendingDept().should('be.visible').click()
    claims.processingBill().should('be.visible').click()
    claims.processingPayment().should('be.visible').click()
    claims.processed().should('be.visible').click()
    claims.reimbursed().should('be.visible').click()
  })

  it('C51: Users can search claim by using date.', () => {
    navbar.sideNavClaim().should('be.visible').click()
    cy.url().should('include', '/claims')
    claims.claimsHeading().should('be.visible')
    claims.fromDate().should('be.visible').click()
    claims.dateToday().should('be.visible').click()
    claims.toDate().should('be.visible').click()
    claims.dateToday().should('be.visible').click()
  })

  it('C52: Users can search claims by using creator filter', () => {
    navbar.sideNavClaim().should('be.visible').click()
    cy.url().should('include', '/claims')
    claims.claimsHeading().should('be.visible')
    claims.claimsApprovals().should('be.visible').click()
    claims.searchByCreator().should('be.visible').click()
    claims.creatorSelect().scrollIntoView().should('be.visible').click()
    claims.verifyResult().scrollIntoView().should('be.visible')
  })

  it('C47: Users can approve claims', () => {
    navbar.sideNavClaim().should('be.visible').click()
    cy.url().should('include', '/claims')
    claims.claimsHeading().should('be.visible')
    claims.claimsApprovals().should('be.visible').click()
    claims.claimApprove().should('be.visible').click()
    claims.claimApproveMondal().should('be.visible')
    claims.claimApproveYes().should('be.visible').click()
  })

  it('C48: Users can reject claims', () => {
    navbar.sideNavClaim().should('be.visible').click()
    cy.url().should('include', '/claims')
    claims.claimsHeading().should('be.visible')
    claims.claimsApprovals().should('be.visible').click()
    claims.claimReject().should('be.visible').click()
    claims.claimRejectMondal().should('be.visible')
    claims.claimApproveYes().should('be.visible').click()
  })
})
