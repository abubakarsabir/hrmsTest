import SignInModule from '../../Pages/SignInDetail'

beforeEach(() => {
  cy.Login()
})

describe('Smoke:Logout Test', () => {
  const signinpage = new SignInModule()

  it('C68: User can logout', () => {
    signinpage.profileIcon().click()
    signinpage.logout().click()
  })
})
