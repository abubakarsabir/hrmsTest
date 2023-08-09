export class EditProfile {
  keepProfileText() {
    return cy.contains('span', 'Keep your profile updated')
  }

  mailAddress() {
    return cy.xpath('//input[@name="temporary_address"]')
  }

  updateBtn() {
    return cy.contains('span', 'Update Profile')
  }
}

export default EditProfile
