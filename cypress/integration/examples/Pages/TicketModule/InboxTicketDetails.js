class InboxTicketDetails {
  sideNavTicket() {
    return cy.get('span[title="Tickets"]')
  }

  title() {
    return cy.xpath('//span[contains(text(),"Ticket Centre")]')
  }

  ticketInbox() {
    return cy.xpath('//span[normalize-space()="Inbox"]')
  }

  ticketSent() {
    return cy.get('#tickets-cardContent-sentTab')
  }

  createNewTicketButton() {
    return cy.xpath('//span[contains(@class,"create-new-ticket")]')
  }

  allTicketStatus(n) {
    return cy.get(`#tickets-inbox-ticketsList > span:nth-child(${n}) .ticket-statuses .ticket-status`)
  }

  totalTicket() {
    return cy.get('.rc-pagination-total-text')
  }

  nextPage(x) {
    return cy.get('.rc-pagination-item-' + x)
  }

  ticketModalheaderText() {
    return cy.xpath('//span[contains(text(),"Ticket Centre")]')
  }

  inboxSearch() {
    return cy.get('#tickets-inbox-searchField')
  }

  ticketList() {
    return cy.get('#tickets-inbox-ticketsList')
  }

  filterButton() {
    return cy.get('#tickets-inbox-filters')
  }

  priorityCheckBox() {
    return cy.get('#react-select-2-option-1')
  }

  asssignedOnlyCheckBox() {
    return cy.get('#react-select-2-option-4')
  }

  priorityDropDown() {
    return cy.get('[data-testid="tickets-inbox-filters-priority"]')
  }

  criticalPriority() {
    return cy.get('[data-testid="tickets-inbox-filters-priority-critical"]')
  }

  highPriority() {
    return cy.get('[data-testid="tickets-inbox-filters-priority-high"]')
  }

  mediumPriority() {
    return cy.get('[data-testid="tickets-inbox-filters-priority-medium"]')
  }

  lowPriority() {
    return cy.get('[data-testid="tickets-inbox-filters-priority-low"]')
  }

  categoryCheckBox() {
    return cy.get('#react-select-2-option-0')
  }

  statusCheckBox() {
    return cy.get('#react-select-2-option-2')
  }

  categoryDropDown() {
    return cy.get('[data-testid="tickets-inbox-filters-category"]')
  }

  statusDropDown() {
    return cy.get('[data-testid="tickets-inbox-filters-status"]')
  }

  stationaryCategory() {
    return cy.get('[data-testid="tickets-inbox-filters-category-stationary"]')
  }

  hardwareCategory() {
    return cy.get('[data-testid="tickets-inbox-filters-category-hardware"]')
  }

  chairCategory() {
    return cy.get('[data-testid="tickets-inbox-filters-category-chairs"]')
  }

  otherCategory() {
    return cy.get('[data-testid="tickets-inbox-filters-category-other"]')
  }

  openStatus() {
    return cy.get('[data-testid="tickets-inbox-filters-status-open"]')
  }

  inProgressStatus() {
    return cy.get('[data-testid="tickets-inbox-filters-status-in-progress"]')
  }

  closedStatus() {
    return cy.get('[data-testid="tickets-inbox-filters-status-closed"]')
  }

  completeStatus() {
    return cy.get('[data-testid="tickets-inbox-filters-status-completed"]')
  }

  ticketListXpath() {
    return cy.xpath('//span[2]//div[1]//div[1]//div[2]//div[2]//div[1]//b[1]')
  }

  ticketRightListXpath(n) {
    return cy.get(`#tickets-inbox-ticketsList > span:nth-child(${n}) .ticket-statuses`)
  }

  emptyListMessage() {
    return cy.get('#tickets-inbox-emptyTicketsListMessage')
  }

  threeDots(n) {
    return cy.get(`#tickets-inbox-ticketsList > span:nth-child(${n}) .ticket-statuses .ticket-user-type > div > span `)
  }
}
export default InboxTicketDetails
