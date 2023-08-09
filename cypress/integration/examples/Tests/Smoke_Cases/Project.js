import NavBar from '../../Pages/NavBar'
import Project from '../../Pages/Project'

beforeEach(() => {
  cy.Login()
})

describe('Smoke:Project Test', () => {
  const navbar = new NavBar()
  const projectpage = new Project()

  it('C63: Users can create project.', () => {
    navbar.sideNavProjects().should('be.visible').click()
    cy.url().should('include', 'projects')
    projectpage.viewProjects().should('be.visible')
    projectpage.createProject().should('be.visible').click()
    projectpage.createNewProject().should('be.visible')
    projectpage.projectTitle().should('be.visible').type('Testing Project')
    projectpage.selectProjectStatus().should('be.visible').click()
    projectpage.selectValueProject().should('be.visible').click()
    projectpage.descriptionProject().should('be.visible').type('Testing Project')
    projectpage.startDate().should('be.visible').click()
    projectpage.startDateOKBtn().should('be.visible').click()
    projectpage.technologoies().should('be.visible').click()
    projectpage.technologoiesOption().should('be.visible').click()
    projectpage.projectManager().should('be.visible').click()
    projectpage.projectManagerOption().should('be.visible').click()
    projectpage.teamMembers().should('be.visible').click()
    projectpage.teamMemberOption().should('be.visible').click()
    projectpage.selectRole().should('be.visible').click()
    projectpage.selectRoleOption().should('be.visible').click()
    projectpage.startDateTM().should('be.visible').click()
    projectpage.startDateOKBtn().should('be.visible').click()
    cy.intercept('POST', 'projects').as('postprojects')
    projectpage.submitBtn().should('be.visible').click()
    cy.wait('@postprojects')
    cy.get('@postprojects').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C64: Users can edit project.', () => {
    navbar.sideNavProjects().should('be.visible').click()
    cy.url().should('include', 'projects')
    projectpage.viewProjects().should('be.visible')
    projectpage.projectToEdit().first().should('be.visible').click()
    projectpage.projectDetails().should('be.visible')
    projectpage.editProject().should('be.visible').click()
    projectpage.projectTitle().should('be.visible').type('Edited')
    projectpage.submitBtn().should('be.visible').click()
  })

  it('C65: Users can search project by using keywords by name and description..', () => {
    navbar.sideNavProjects().should('be.visible').click()
    cy.url().should('include', 'projects')
    projectpage.viewProjects().should('be.visible')
    projectpage.searchBar().should('be.visible').type('Testing Project')
    projectpage.searchResult().should('be.visible')
  })
})
