class AllTickets {
  allTickets() {
    return cy.xpath('//span[normalize-space()="All Tickets"]')
  }

  createdBy() {
    return cy.contains('div', 'Select').first()
  }

  assignedTo() {
    return cy.contains('div', 'Select').last()
  }

  startDay() {
    return cy.get('.DateInput_input DateInput_input_1').first()
  }

  endDay() {
    return cy.get('.DateInput_input DateInput_input_1').last()
  }

  searchBtn() {
    return cy.get('.search-button')
  }

  serachResult() {
    return cy.get('#tickets-all-tickets-tickets-list-1')
  }
}
export default AllTickets
