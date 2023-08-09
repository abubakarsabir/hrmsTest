import DashboardDetail from '../../Pages/DashboardDetail'
import Departments from '../../Pages/Departments/Departments'
import NewDepartment from '../../Pages/Departments/NewDepartment'
import NavBar from '../../Pages/NavBar'

const dashboardpage = new DashboardDetail()
const newdepartment = new NewDepartment()
const department = new Departments()
const navbar = new NavBar()
let Dname, Des, Dnameedit, Desedit

beforeEach(() => {
  cy.Login()
})

before(() => {
  cy.fixture('DepartmentData.json').then((obj) => {
    console.log(obj)
    Dname = obj.DepartmentName
    Des = obj.Description
    Dnameedit = obj.DepartmentNameEdited
    Desedit = obj.DescriptionEdited
  })
})

describe('Smoke:Department Test Suit', () => {
  it('C18: User can create new department.', () => {
    Cypress.Cookies.preserveOnce('access-token')
    navbar.sideNavDeparment().should('be.visible').click()
    department.headerText().should('have.text', 'Departments')
    department.headerDescription().should('have.text', 'Make Changes to Departments')
    newdepartment.columnText().should('have.text', 'Department')
    cy.url().should('include', '/department')
    cy.intercept('POST', '**/departments').as('postDep')
    department.newDepartmentButton().should('have.text', 'New Department').click()
    newdepartment.modalText().should('have.text', 'New Department')
    newdepartment.modalTextt().should('have.text', 'Department Titles')
    newdepartment.name().type(Dname)
    newdepartment.description().type(Des)
    newdepartment.submit().click()
    cy.wait('@postDep')
    cy.get('@postDep').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
      expect(xhr.response.body.description).to.equal('Testing the department description')
    })
  })

  it('C19: Department Name and description shown correctly.', () => {
    dashboardpage.welcomeWidget().should('be.visible')
    navbar.sideNavDeparment().should('be.visible').click()
    department.headerText().should('have.text', 'Departments')
    department.nameHeading().should('be.visible')
    department.departmentHeading().should('be.visible')
  })

  it('C20: User can delete existing department.', () => {
    dashboardpage.welcomeWidget().should('be.visible')
    navbar.sideNavDeparment().should('be.visible').click()
    department.headerText().should('have.text', 'Departments')
    department.deleteDepartmentIcon().should('be.visible').click()
    department.deleteConfirmationMondal().should('be.visible')
    department.deleteYesButton().should('be.visible').click()
    //department.deleteSuccessfully().should('be.visible')
  })

  it('C21: User can edit name and description of existing department', () => {
    dashboardpage.welcomeWidget().should('be.visible')
    navbar.sideNavDeparment().should('be.visible').click()
    department.headerText().should('have.text', 'Departments')
    department.editDepartmentIcon().should('be.visible').click()
    department.editDepartmentMondal().should('be.visible')
    department.nameEdit().type(Dnameedit)
    department.descriptionEdit().type(Desedit)
    department.saveChanges().should('be.visible').click()
  })
})
