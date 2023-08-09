class NewDepartment {
  columnText() {
    return cy.get('.table-head-cell:nth-child(2)')
  }

  modalText() {
    return cy.contains('h2', 'New Department')
  }

  modalTextt() {
    return cy.contains('h5', 'Department Titles')
  }

  name() {
    return cy.xpath('//input[@name="name"]')
  }

  description() {
    return cy.xpath('//textarea[@name="description"]')
  }

  submit() {
    return cy.get('.submit-button')
  }
}
export default NewDepartment
