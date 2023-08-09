export class Role {
  roleHeading() {
    return cy.contains('span', 'All Roles')
  }

  newRolebtn() {
    return cy.contains('span', 'New Role')
  }

  newRoleHeading() {
    return cy.contains('span', 'New Role')
  }

  roleTitle() {
    return cy.xpath('//input[@name="title"]')
  }

  roleDepartment() {
    return cy.get('#mui-component-select-department_id')
  }

  roleDepartmentName() {
    return cy.contains('span', 'Administration')
  }

  roleDescription() {
    return cy.xpath('//input[@name="description"]')
  }

  roleCreatebtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  roleTitleHeader() {
    return cy.contains('td', 'Title')
  }

  roleDesriptionHeader() {
    return cy.contains('td', 'Description')
  }

  roleDeleteIcon() {
    return cy.get('.fa-trash').last()
  }

  deleteMondal() {
    return cy.contains('h2', 'Are you sure you want to delete this role?')
  }

  deleteYes() {
    return cy.contains('span', 'Yes')
  }

  editIcon() {
    return cy.get('.fa-pencil').last()
  }

  editRoleHeading() {
    return cy.contains('span', 'Edit Role')
  }
}
export default Role
