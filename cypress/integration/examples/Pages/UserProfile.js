export class UserProfile {
  UsernameHeading() {
    return cy.xpath('//div[contains(@class,"name")]')
  }

  AboutMeHeading() {
    return cy.contains('div', 'About Me')
  }

  ReportingToHeading() {
    return cy.contains('div', 'Reporting To')
  }

  LeadHeading() {
    return cy.contains('div', 'Lead')
  }

  editProfile() {
    return cy.get('.edit-profile-link')
  }
}

export default UserProfile
