export class Claims {
  claimsHeading() {
    return cy.contains('span', 'Claims Summary')
  }

  claimsApprovals() {
    return cy.contains('span', 'Claim Approvals')
  }

  addNewClaim() {
    return cy.contains('span', 'Add new Claim')
  }

  newClaimHeading() {
    return cy.contains('h2', 'NEW CLAIM')
  }

  claimType() {
    return cy.contains('div', 'Select Claim Type ...')
  }

  claimTypeOption() {
    return cy.contains('div', 'Gym Allowance')
  }

  dateClaims() {
    return cy.get('.date-field')
  }

  selectDate() {
    return cy.get('.react-datepicker__day--today')
  }

  totalAmount() {
    return cy.xpath('//input[@name="amount"]')
  }

  descriptionBox() {
    return cy.get('.description')
  }

  uploadImage() {
    return cy.xpath('//input[@accept="image/*, .pdf, .doc, .docx"]')
  }

  saveBtn() {
    return cy.get('.save-btn')
  }

  claimApprove() {
    return cy.contains('span', 'Approve').first()
  }

  claimApproveMondal() {
    return cy.contains('h2', 'Are you sure you want to Approve this Claim?')
  }

  claimApproveYes() {
    return cy.contains('span', 'Yes')
  }

  claimReject() {
    return cy.contains('span', 'Reject').first()
  }

  claimRejectMondal() {
    return cy.contains('h2', 'Are you sure you want to Reject this Claim?')
  }

  categoryTab() {
    return cy.contains('span', 'Category')
  }

  selectCategory() {
    return cy.get('#react-select-2-option-0')
  }

  categoryFilterResult() {
    return cy.contains('div', 'Gym Allowance').first()
  }

  statusTab() {
    return cy.get('.css-1v99tuv').last()
  }

  pendingLead() {
    return cy.get('#react-select-2-option-0')
  }

  pendingDept() {
    return cy.get('#react-select-2-option-2')
  }

  processingBill() {
    return cy.get('#react-select-2-option-3')
  }

  processingPayment() {
    return cy.get('#react-select-2-option-4')
  }

  processed() {
    return cy.get('#react-select-2-option-5')
  }

  reimbursed() {
    return cy.get('#react-select-2-option-6')
  }

  fromDate() {
    return cy.xpath('//input[@placeholder="From"]')
  }

  toDate() {
    return cy.xpath('//input[@placeholder="To"]')
  }

  searchByCreator() {
    return cy.contains('div', 'Search by Creator(s)')
  }

  creatorSelect() {
    return cy.contains('span', 'Jawad Firdous')
  }

  verifyResult() {
    return cy.xpath('//div[@title="Jawad Firdous"]')
  }

  dateToday() {
    return cy.get('.DayPicker-Day--today')
  }
}
export default Claims
