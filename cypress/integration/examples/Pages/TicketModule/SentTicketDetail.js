class SentTicketDetail {
  sentTab() {
    return cy.xpath('//span[normalize-space()="Sent"]')
  }

  filterButton() {
    return cy.get('#tickets-sent-filters')
  }

  search() {
    return cy.get('#search')
  }

  statusFilter() {
    return cy.get('#react-select-2-option-2')
  }

  statusDropDown() {
    return cy.get('[data-testid=tickets-sent-filters-status]')
  }

  ticketFullXpath(n) {
    return cy.get(`#tickets-sent-ticketsList > span:nth-child(${n}) .ticket-row-detail`)
  }

  sideNavTicket() {
    return cy.get('#side-nav-bar-tickets')
  }

  ticketInbox() {
    return cy.get('#tickets-cardContent-inboxTab')
  }

  ticketSent() {
    return cy.get('#tickets-cardContent-sentTab')
  }

  CategoryDropDown() {
    return cy.get('[data-testid="tickets-sent-filters-category"]')
  }

  createNewTicketButton() {
    return cy.get('#tickets-cardActions')
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
    return cy.get('#tickets-sent-searchField')
  }

  ticketList() {
    return cy.get('#tickets-sent-ticketsList')
  }

  priorityCheckBox() {
    return cy.get('#react-select-2-option-1')
  }

  asssignedOnlyCheckBox() {
    return cy.get('#react-select-2-option-4')
  }

  priorityDropDown() {
    return cy.get('[data-testid=tickets-sent-filters-priority]')
  }

  criticalPriority() {
    return cy.get('[data-testid=tickets-sent-filters-priority-critical]')
  }

  highPriority() {
    return cy.get('[data-testid=tickets-sent-filters-priority-high]')
  }

  mediumPriority() {
    return cy.get('[data-testid=tickets-sent-filters-priority-medium]')
  }

  lowPriority() {
    return cy.get('[data-testid=tickets-sent-filters-priority-low]')
  }

  categoryCheckBox() {
    return cy.get('#react-select-2-option-0')
  }

  statusCheckBox() {
    return cy.get('#react-select-2-option-2')
  }

  categoryDropDown() {
    return cy.get('[data-testid=tickets-sent-filters-category]')
  }

  stationaryCategory() {
    return cy.get('[data-testid=tickets-sent-filters-category-stationary]')
  }

  hardwareCategory() {
    return cy.get('[data-testid=tickets-sent-filters-category-hardware]')
  }

  chairCategory() {
    return cy.get('[data-testid=tickets-sent-filters-category-chairs]')
  }

  otherCategory() {
    return cy.get('[data-testid=tickets-sent-filters-category-other]')
  }

  openStatus() {
    return cy.get('[data-testid=tickets-sent-filters-status-open]')
  }

  inProgressStatus() {
    return cy.get('[data-testid=tickets-sent-filters-status-in-progress]')
  }

  closedStatus() {
    return cy.get('[data-testid=tickets-sent-filters-status-closed]')
  }

  completeStatus() {
    return cy.get('[data-testid=tickets-sent-filters-status-completed]')
  }

  ticketListXpath(n) {
    return cy.get(`#tickets-sent-ticketsList > span:nth-child(${n}) .ticket-row-detail`)
  }

  ticketRightListXpath(n) {
    return cy.get(`#tickets-sent-ticketsList > span:nth-child(${n}) .ticket-statuses`)
  }

  emptyListMessage() {
    return cy.get('#idtickets-sent-emptyTicketsListMessage')
  }

  threeDots() {
    return cy.get('.fa-ellipsis-v').first()
  }

  serachResult() {
    return cy.contains('b', 'Testing Ticket')
  }

  changeStatus() {
    return cy.get('.rc-dropdown-menu-item')
  }
}
export default SentTicketDetail
