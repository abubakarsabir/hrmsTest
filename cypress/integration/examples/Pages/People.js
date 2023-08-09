export class Poeple {
  peopleHeading() {
    return cy.get('.MuiCardHeader-title')
  }

  searchBar() {
    return cy.xpath('//input[@name="search"]')
  }

  searchResult() {
    return cy.contains('td', 'Software Engineer')
  }

  blockUser() {
    return cy.get('.fa-unlock').eq(2)
  }

  offBoardingFrom() {
    return cy.contains('h2', 'Off-boarding Form')
  }

  resgantionDate() {
    return cy.get('.MuiIconButton-label').first()
  }

  okButtonOnCalender() {
    return cy.contains('span', 'OK')
  }

  tentativeDate() {
    return cy.get('.MuiIconButton-label').eq(1)
  }

  lastWorkingDate() {
    return cy.get('.MuiIconButton-label').eq(2)
  }
  blockUserButton() {
    return cy.contains('span', 'Save')
  }

  blockUserMondal() {
    return cy.contains('h2', 'Are you sure you want to Deactivate this user?')
  }

  blockUserMondalYes() {
    return cy.contains('span', 'Yes')
  }

  firstUserlist() {
    return cy.get('.mobile-display-text').first()
  }

  organizationChartButton() {
    return cy.contains('span', 'Organization Chart')
  }

  organizationHeading() {
    return cy.contains('span', 'Organization')
  }

  editUserIcon() {
    return cy.get('.fa-pencil').first()
  }

  editHeadingonMondal() {
    return cy.get('#alert-dialog-title')
  }

  editFavQuote() {
    return cy.xpath('//textarea[@name="fav_quote"]')
  }

  editProfileSavebtn() {
    return cy.contains('span', 'Save Changes')
  }

  resendEmailbtn() {
    return cy.get('.fa-repeat').first()
  }

  resendEmailVerification() {
    return cy.contains('h2', 'Are you sure you want to Resend the Verification Email to this user?')
  }

  resendEmailYesbtn() {
    return cy.contains('span', 'Yes')
  }

  filterBy() {
    return cy.contains('span', 'Filter By')
  }

  filterByClose() {
    return cy.contains('span', 'Status')
  }

  selectFilter() {
    return cy.contains('div', 'Status')
  }

  removeFilter() {
    return cy.get('.rc-select-selection__choice__content')
  }

  selectStatusDD() {
    return cy.get('.rc-select-selection__rendered')
  }

  selectedBlockedUser() {
    return cy.contains('li', 'Blocked Users')
  }

  unlockUser() {
    return cy.get('.fa-lock')
  }

  unlockConfirmation() {
    return cy.contains('h2', 'Are you sure you want to Activate this user?')
  }

  unlockYes() {
    return cy.contains('span', 'Yes')
  }

  allUsers() {
    return cy.contains('span', 'All users')
  }

  cvsDataDD() {
    return cy.contains('div', 'Select data required in the CSV')
  }

  cvsDataSelect() {
    return cy.get('#react-select-2--option-1')
  }

  genrateCSV() {
    return cy.contains('span', 'Generate CSV')
  }

  downloadCSV() {
    return cy.contains('a', 'Download CSV')
  }
}

export default Poeple
