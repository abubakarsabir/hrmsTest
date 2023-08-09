export class DnarAdminPanel {
  adminPanel() {
    return cy.contains('span', 'Admin Panel')
  }

  dnarsMinting() {
    return cy.contains('span', 'Dnars Minting')
  }

  generateDnars() {
    return cy.contains('span', 'Generate Dnars')
  }

  generateDnarsHeading() {
    return cy.contains('h2', 'Generate Dnars')
  }

  dnarInput() {
    return cy.get('.dnars-input-field')
  }

  nextBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  tokenInput() {
    return cy.get('.token-input-field')
  }

  generateBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  DnarApprovals() {
    return cy.contains('span', 'Dnar Approvals')
  }

  approveTransaction() {
    return cy.get('.approve-icon').first()
  }

  rejectTransaction() {
    return cy.get('.reject-icon').first()
  }

  remarksTextarea() {
    return cy.xpath('//textarea[@placeholder="Please provide remarks"]')
  }

  submitRemarks() {
    return cy.xpath('//button[@type="submit"]')
  }

  transferDNARS() {
    return cy.contains('span', 'Transfer Dnars')
  }

  awardDNARSTo() {
    return cy.get('.Select-arrow').first()
  }

  categoryTo() {
    return cy.get('#react-select-5--value')
  }

  provideDNARS() {
    return cy.xpath('//input[@name="dnars"]')
  }

  pmfund() {
    return cy.contains('span', 'Project Manager Fund')
  }

  transcationNote() {
    return cy.xpath('//textarea[@name="notes"]')
  }

  transferBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  selectUserToTransfer() {
    return cy.get('#react-select-4--option-6')
  }

  selectCategory() {
    return cy.get('#react-select-5--option-0')
  }

  centralBank() {
    return cy.contains('span', 'Dnars Availabe in Central Bank')
  }

  mintedTilltoday() {
    return cy.contains('span', 'Dnars Minted Till Today')
  }

  transferredTillTodday() {
    return cy.contains('span', 'Dnars Transferred Till Today')
  }

  crossIcon() {
    return cy.contains('h2', 'Transfer Dnars').children().last()
  }
}

export default DnarAdminPanel
