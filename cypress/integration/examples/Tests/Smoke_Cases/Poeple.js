import NavBar from '../../Pages/NavBar'
import People from '../../Pages/People'
import UserProfile from '../../Pages/UserProfile'

beforeEach(() => {
  cy.Login()
})

afterEach(() => {
  cy.saveLocalStorage()
})

describe('Smoke:people Test', () => {
  const navbar = new NavBar()
  const peoplepage = new People()
  const usersprofilepage = new UserProfile()

  it('C22: Search result displayed should be relevant ot search keyword.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.searchBar().should('be.visible')
    cy.wait(500)
    peoplepage.searchBar().type('Software Engineer')
    peoplepage.searchResult().should('be.visible')
  })

  it('C23: Authorized users can block other users.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.searchBar().should('be.visible')
    cy.wait(500)
    peoplepage.searchBar().type('Software Engineer')
    cy.wait(500)
    peoplepage.searchResult().should('be.visible')
    peoplepage.blockUser().should('be.visible').click()
    peoplepage.offBoardingFrom().should('be.visible')
    peoplepage.resgantionDate().should('be.visible').click()
    peoplepage.okButtonOnCalender().should('be.visible').click()
    peoplepage.tentativeDate().should('be.visible').click()
    peoplepage.okButtonOnCalender().should('be.visible').click()
    peoplepage.lastWorkingDate().should('be.visible').click()
    peoplepage.okButtonOnCalender().should('be.visible').click()
    peoplepage.blockUserButton().should('be.visible').click()
    peoplepage.blockUserMondal().should('be.visible')
    peoplepage.blockUserMondalYes().should('be.visible').click()
  })

  it('C24: Authorized users can unblock the users who are blocked.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.filterBy().should('be.visible').click()
    peoplepage.selectFilter().should('be.visible').click()
    peoplepage.filterByClose().should('be.visible').click({ force: true })
    peoplepage.selectStatusDD().should('be.visible').click()
    peoplepage.selectedBlockedUser().should('be.visible').click()
    peoplepage.allUsers().should('be.visible').click()
    peoplepage.unlockUser().scrollIntoView().should('be.visible').click()
    peoplepage.unlockConfirmation().should('be.visible')
    peoplepage.unlockYes().should('be.visible').click()
  })

  it('C25: Users can open the profile of other users.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.firstUserlist().should('be.visible').click()
    usersprofilepage.UsernameHeading().should('be.visible')
    usersprofilepage.AboutMeHeading().should('be.visible')
    usersprofilepage.ReportingToHeading().should('be.visible')
    usersprofilepage.LeadHeading().should('be.visible')
  })

  it('C26: Users can generate & download CSV by applying filters.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.cvsDataDD().should('be.visible').click()
    peoplepage.cvsDataSelect().should('be.visible').click()
    peoplepage.genrateCSV().should('be.visible').click()
    peoplepage.downloadCSV().should('be.visible').click()
  })

  it('C27: Organization chart is opening.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.organizationChartButton().should('be.visible').click()
    peoplepage.organizationHeading().should('be.visible')
  })

  it('C29: User can resend email.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.resendEmailbtn().should('be.visible').click()
    peoplepage.resendEmailVerification().should('be.visible')
    cy.intercept('POST', 'resend_welcome_email').as('postResendmail')
    peoplepage.resendEmailYesbtn().should('be.visible').click()
    cy.wait('@postResendmail')
    cy.get('@postResendmail').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C28: Users can edit profile.', () => {
    navbar.sideNavPeople().should('be.visible').click()
    peoplepage.peopleHeading().should('be.visible')
    peoplepage.editUserIcon().should('be.visible').click()
    peoplepage.editHeadingonMondal().should('be.visible')
    peoplepage.editFavQuote().scrollIntoView().should('be.visible').type(' Edited')
    peoplepage.editProfileSavebtn().scrollIntoView().should('be.visible').click()
  })
})
