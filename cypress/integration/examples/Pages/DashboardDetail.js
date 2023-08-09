class DashboardDetail {
  welcomeWidget() {
    return cy.get('.welcome')
  }

  profileImage() {
    return cy.get('img[class="avatar sb-avatar__image"]')
  }

  outOfOfficeWidget() {
    return cy.get('.leave-widget')
  }

  outOfOfficeEmptyIndicator() {
    return cy.contains('div', 'No one is on leave')
  }

  newArrivalWidget() {
    return cy.get('.new-arrival')
  }

  newArrivalEmptyIndicator() {
    return cy.get('.error-msg')
  }

  newArrivalUser() {
    return cy.get('.new-arrival-report').first()
  }

  leaveWidget() {
    return cy.get('.pending-leaves')
  }

  leaveUser() {
    return cy.get('.leave-report')
  }

  ticketWidget() {
    return cy.get('.inbox-tickets')
  }

  claimWidget() {
    return cy.get('.pending-expenses')
  }

  dnarWidget() {
    return cy.get('.pending-dnar-transactions')
  }

  upcomingPublicHolidayWidget() {
    return cy.get('.holiday')
  }

  leaveWidgetText() {
    return cy.get('div[class="inbox-tickets"] div[class="pointer"]')
  }

  ticketWidgetText() {
    return cy.get('div[class="inbox-tickets"] div[class="pointer"]')
  }

  dnarWidgetText() {
    return cy.get('#dashboard-pending-dnars-approvals-text')
  }

  upcomingHoliday() {
    return cy.get('.holiday-record')
  }

  setting() {
    return cy.get('#menu-list > ul li:nth-child(2)')
  }

  logout() {
    return cy.contains('span', 'Logout')
  }
}
export default DashboardDetail
