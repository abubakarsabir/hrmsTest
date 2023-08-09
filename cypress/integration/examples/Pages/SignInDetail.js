export class SignInModule {
  emailInput() {
    return cy.get('input[placeholder="Email address"]')
  }

  passwordInput() {
    return cy.get('input[placeholder="Password"]')
  }

  signInButton() {
    return cy.get('.landing-page-button')
  }

  forgotPassword() {
    return cy.get('a[class="landing-page-link"]')
  }

  invalidEmailOrPasswordError() {
    return cy.get('.landing-page-error-div')
  }

  emailOnResetPassword() {
    return cy.get('.landing-page-form-field')
  }

  newPassword() {
    return cy.get('input[placeholder="Password"]')
  }

  confirmPassword() {
    return cy.get('input[placeholder="Confirm Password"]')
  }
  profileIcon() {
    return cy.get('img[class="user-avatar profile-image-click sb-avatar__image"]')
  }

  logout() {
    return cy.get('li[role="menuitem"] span[class="text"]')
  }
}

export default SignInModule
