beforeEach(() => {
  cy.Login()
})

describe('Smoke:How are you feeling today pop up', () => {
  it('How are you Feeling today', () => {
    cy.contains('h5', 'How are you feeling today?').should('be.visible')
    cy.contains('span', 'Fine').should('be.visible').click()
    cy.xpath('//button[@type="submit"]').should('be.visible').click()
  })
})
