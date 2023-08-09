import SignInDetail from '../../Pages/SignInDetail'

let email
let password
before(() => {
  cy.visit(Cypress.env('Login'))
  cy.fixture('ValidCardential.json').then((element) => {
    console.log(element)
    email = element.email
    password = element.password
  })
})

describe('Smoke:Sign In Test', () => {
  const signinpage = new SignInDetail()

  it('C8: User can login with valid email and password.', () => {
    signinpage.emailInput().type(email)
    signinpage.passwordInput().type(password)
    signinpage.signInButton().click()
    cy.url().should('eq', Cypress.env('Dashboard'))
    signinpage.profileIcon().click()
    signinpage.logout().click()
  })
})
