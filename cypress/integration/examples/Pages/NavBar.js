export class NavBar {
  sideNavDeparment() {
    return cy.get('#side-nav-bar-departments')
  }

  sideNavPeople() {
    return cy.get('#side-nav-bar-people')
  }

  sideNavRole() {
    return cy.get('#side-nav-bar-roles')
  }

  sideNavTicket() {
    return cy.get('#side-nav-bar-tickets')
  }

  sideNavLeave() {
    return cy.get('#side-nav-bar-leaves')
  }

  sideNavFeedback() {
    return cy.get('#side-nav-bar-feedbacks')
  }

  sideNavClaim() {
    return cy.get('#side-nav-bar-claims')
  }

  sideNavInventory() {
    return cy.get('#side-nav-bar-inventory')
  }

  sideNavProjects() {
    return cy.get('#side-nav-bar-projects')
  }

  sideNavDNARS() {
    return cy.get('#side-nav-bar-d-nar')
  }

  sideNavAdminPanel() {
    return cy.get('#side-nav-bar-admin-panel')
  }
}
export default NavBar
