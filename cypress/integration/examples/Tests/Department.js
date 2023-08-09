import Departments from '../Pages/Departments/Departments'
import NewDepartment from '../Pages/Departments/NewDepartment'
import NavBar from '../Pages/NavBar'
import SignInDetail from '../Pages/SignInDetail'

const newdepartment = new NewDepartment()
const department = new Departments()
const navbar = new NavBar()
let Dname, Des

beforeEach(() => {
  cy.Login()
})

before(() => {
  //fetch data from the json file
  cy.fixture('DepartmentData.json').then((obj) => {
    console.log(obj)
    Dname = obj.DepartmentName
    Des = obj.Description
  })
})

describe('Department Suites', () => {
  it('Creation of Department', () => {
    Cypress.Cookies.preserveOnce('access-token')
    navbar.sideNavDeparment().should('be.visible').click()
    //Multiple assertions to double verify
    //we're inside the right tab.
    department.headerText().should('have.text', 'Departments')
    department.headerDescription().should('have.text', 'Make Changes to Departments')
    newdepartment.columnText().should('have.text', 'Department')
    cy.url().should('include', '/department')

    //verify correct request and response
    cy.intercept('POST', '**/departments').as('postDep')
    //clicking the NewDepartment Button

    department.newDepartmentButton().should('have.text', 'New Department').click()
    //Assertions to verify
    newdepartment.modalText().should('have.text', 'New Department')
    newdepartment.modalTextt().should('have.text', 'Department Titles')
    // Input
    newdepartment.name().type(Dname)
    newdepartment.description().type(Des)
    //submit
    newdepartment.submit().click()
    //Api verification
    cy.wait('@postDep')
    cy.get('@postDep').then((xhr) => {
      console.log(xhr)
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
      expect(xhr.response.body.description).to.equal('Testing the department description')
    })
  })
  const signinpage = new SignInDetail()
  it('Logout', function () {
    signinpage.profileIcon().click()
    //click the logout button
    signinpage.logout().click()
  })
})
