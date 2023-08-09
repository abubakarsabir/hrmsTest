export class Feedback {
  feedbackHeading() {
    return cy.contains('span', 'Feedbacks')
  }

  selectUser() {
    return cy.contains('div', 'Select a User')
  }

  userValue() {
    return cy.contains('div', 'Account Owner')
  }

  detailsBox() {
    return cy.get('.public-DraftEditor-content')
  }

  submitBtn() {
    return cy.get('.submit-button')
  }
}

export default Feedback
