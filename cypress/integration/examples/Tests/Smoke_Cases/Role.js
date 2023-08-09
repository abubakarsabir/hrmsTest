import NavBar from '../../Pages/NavBar'
import Role from '../../Pages/Role'

let rolename, roledes
before(() => {
  cy.fixture('RoleData.json').then((obj) => {
    console.log(obj)
    rolename = obj.RoleName
    roledes = obj.RoleDescription
  })
})

beforeEach(() => {
  cy.Login()
})

afterEach(() => {
  cy.saveLocalStorage()
})

describe('Smoke:Role Test', () => {
  const navbar = new NavBar()
  const role = new Role()

  it('C30: User can create new Role.', () => {
    navbar.sideNavRole().should('be.visible').click()
    role.roleHeading().should('be.visible')
    role.newRolebtn().should('be.visible').click()
    role.newRoleHeading().should('be.visible')
    role.roleTitle().should('be.visible').type(rolename)
    role.roleDepartment().should('be.visible').click()
    role.roleDepartmentName().should('be.visible').click()
    role.roleDescription().should('be.visible').type(roledes)
    cy.intercept('POST', 'roles').as('postRoles')
    role.roleCreatebtn().scrollIntoView().should('be.visible').click()
    cy.wait('@postRoles')
    cy.get('@postRoles').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C31: Role Name and description.', () => {
    navbar.sideNavRole().should('be.visible').click()
    role.roleHeading().should('be.visible')
    role.roleTitleHeader().should('be.visible')
    role.roleDesriptionHeader().should('be.visible')
  })

  it('C32: User can delete existing Roles.', () => {
    navbar.sideNavRole().should('be.visible').click()
    role.roleHeading().should('be.visible')
    role.roleDeleteIcon().scrollIntoView().should('be.visible').click()
    role.deleteMondal().should('be.visible')
    role.deleteYes().should('be.visible').click()
  })

  it('C33: User can edit name and description of existing Roles.', () => {
    navbar.sideNavRole().should('be.visible').click()
    role.roleHeading().should('be.visible')
    role.editIcon().scrollIntoView().should('be.visible').click()
    role.editRoleHeading().should('be.visible')
    role.roleTitle().should('be.visible').type('Edited')
    role.roleCreatebtn().scrollIntoView().should('be.visible').click()
  })
})
