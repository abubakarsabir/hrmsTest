class Departments {
  newDepartmentButton() {
    return cy.contains('span', 'New Department')
  }

  headerText() {
    return cy.contains('span', 'Departments')
  }

  headerDescription() {
    return cy.contains('span', 'Make Changes to Departments')
  }

  nameHeading() {
    return cy.contains('td', 'Name')
  }

  departmentHeading() {
    return cy.contains('td', 'Department')
  }

  deleteDepartmentIcon() {
    return cy.get('span[class="fa fa-trash"]').last()
  }

  deleteConfirmationMondal() {
    return cy.contains('h2', 'Are you sure you want to delete this department?')
  }

  deleteYesButton() {
    return cy.contains('span', 'Yes')
  }

  deleteSuccessfully() {
    return cy.get('#dialogTitle-942')
  }

  editDepartmentIcon() {
    return cy.get('span[class="fa fa-pencil"]').last()
  }

  editDepartmentMondal() {
    return cy.contains('h2', 'Edit Department')
  }

  nameEdit() {
    return cy.xpath('//input[@name="name"]')
  }

  descriptionEdit() {
    return cy.xpath('//textarea[@name="description"]')
  }

  saveChanges() {
    return cy.contains('button', 'Save Changes')
  }
}
export default Departments
