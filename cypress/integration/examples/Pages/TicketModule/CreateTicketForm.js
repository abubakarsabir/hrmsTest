class CeateTicketForm {
  toFieldDiv() {
    return cy.get('#react-select-2--value')
  }

  toFieldInput() {
    return cy.xpath('//input[@aria-activedescendant="react-select-2--value"]')
  }

  selectToUser() {
    return cy.contains('div', 'Account Owner')
  }

  toFieldAfterEnteringText() {
    return cy.xpath('//*[@id="react-select-2--option-0"]')
  }

  toDivePlaceHolder() {
    return cy.xpath('//*[@id="react-select-2--value"]/div[1]')
  }

  ccDiv() {
    return cy.get('.cc-div')
  }

  ccFieldInput() {
    return cy.xpath('//*[@id="react-select-3--value"]/div[2]/input')
  }

  ccFieldAfterEnteringText() {
    return cy.xpath('//*[@id="react-select-3--option-0"]')
  }

  ccDivePlaceHolder() {
    return cy.get('#react-select-3--value > .Select-placeholder')
  }

  categoryDiv() {
    return cy.get('.categories-div')
  }

  categoryFieldInput() {
    return cy.contains('div', 'Category')
  }

  categoryFeildValue() {
    return cy.contains('div', 'Hardware')
  }

  categoryFieldAfterEnteringText() {
    return cy.xpath('//*[@id="react-select-5--option-0"]')
  }

  categoryDivePlaceHolder() {
    return cy.xpath('//*[@id="react-select-5--value"]/div[1]')
  }

  priorityDiv() {
    return cy.contains('div', 'Priority')
  }

  prioirtyValue() {
    return cy.contains('div', 'High')
  }

  priorityFieldInput() {
    return cy.xpath('//*[@id="react-select-4--value"]/div[2]/input')
  }

  priorityFieldAfterEnteringText() {
    return cy.xpath('//*[@id="react-select-4--option-0"]')
  }

  priorityDivePlaceHolder() {
    return cy.xpath('//*[@id="react-select-4--value"]/div[1]')
  }

  title() {
    return cy.get('#tickets-ticketForm-title')
  }

  description() {
    return cy.get('#tickets-ticketForm-description')
  }

  submit() {
    return cy.xpath('//button[contains(text(),"Send Ticket")]')
  }

  cancel() {
    return cy.xpath('//button[contains(text(),"Cancel")]')
  }

  assigneError() {
    return cy.xpath('//*[@id="tickets-ticketForm-ticketAssignee"]/div[2]')
  }

  titleError() {
    return cy.get(`.subject-div >div >small`)
  }

  descriptionError() {
    return cy.get(`.description-field >div >small`)
  }

  categoryError() {
    return cy.xpath('//div[contains(text(),"Category is required")]')
  }

  priorityError() {
    return cy.xpath('//div[contains(text(),"Please specify priority")]')
  }

  ticketCenterHeading() {
    return cy.contains('span', 'Ticket Centre')
  }

  createTicketBtn() {
    return cy.contains('span', 'New Ticket')
  }

  newTicketHeading() {
    return cy.contains('h2', 'New Ticket')
  }
}
export default CeateTicketForm
