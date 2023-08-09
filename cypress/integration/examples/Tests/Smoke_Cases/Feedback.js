import Feedback from '../../Pages/Feedback'
import NavBar from '../../Pages/NavBar'

beforeEach(() => {
  cy.Login()
})

describe('Smoke:Leave Test', () => {
  const feedbackpage = new Feedback()
  const navbar = new NavBar()

  it('C67: User can send feedback.', () => {
    navbar.sideNavFeedback().should('be.visible').click()
    cy.url().should('include', 'feedbacks')
    feedbackpage.selectUser().should('be.visible').click()
    cy.wait(500)
    feedbackpage.userValue().should('be.visible').click()
    feedbackpage.detailsBox().should('be.visible').type('Testing feedback')
    cy.intercept('POST', 'feedbacks').as('feedbacks')
    feedbackpage.submitBtn().should('be.visible').click()
    cy.wait('@feedbacks')
    cy.get('@feedbacks').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })
})
