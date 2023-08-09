export class DNARS {
  allocateDNARSTab() {
    return cy.contains('span', 'Allocate D-NARS')
  }

  allocateDNARSBtn() {
    return cy.xpath('(//span[contains(@class,"MuiButton-label")][normalize-space()="Allocate D-NARS"])[1]')
  }

  allocateDNARSHeader() {
    return cy.contains('h2', 'Allocate D-NARS')
  }

  awardTo() {
    return cy.contains('div', 'Award D-NARS to')
  }

  selectAwardTo() {
    return cy.contains('div', 'Account Owner')
  }

  category() {
    return cy.contains('div', 'Please Provide Category')
  }

  selectCategory() {
    return cy.contains('div', 'Maturity').last()
  }

  inputDNARS() {
    return cy.xpath('//input[@name="dnars"]')
  }

  inputNotes() {
    return cy.xpath('//textarea[@name="notes"]')
  }

  allocateDNARS() {
    return cy.xpath('//button[@type="submit"]')
  }

  crossIcon() {
    return cy.contains('h2', 'Allocate D-NARS').children().last()
  }
}

export default DNARS
