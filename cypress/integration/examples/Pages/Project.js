export class Project {
  viewProjects() {
    return cy.contains('span', 'View Projects')
  }

  createProject() {
    return cy.contains('span', 'Create Project')
  }

  createNewProject() {
    return cy.contains('span', 'Create New Project')
  }

  projectTitle() {
    return cy.xpath('//input[@name="title"]')
  }

  selectProjectStatus() {
    return cy.contains('div', 'Select Project Status')
  }

  selectValueProject() {
    return cy.get('#react-select-2--option-1')
  }

  descriptionProject() {
    return cy.xpath('//textarea[@placeholder="Description"]')
  }

  startDate() {
    return cy.xpath('//input[@value="Start Date"]').first()
  }

  startDateOKBtn() {
    return cy.contains('span', 'OK')
  }

  technologoies() {
    return cy.contains('div', 'Select Technology(s)')
  }

  technologoiesOption() {
    return cy.xpath('//div[@id="react-select-2--option-1"]')
  }

  projectManager() {
    return cy.get('#react-select-3--value')
  }

  projectManagerOption() {
    return cy.xpath('//div[@id="react-select-3--option-0"]')
  }

  teamMembers() {
    return cy.get('#react-select-4--value')
  }

  teamMemberOption() {
    return cy.xpath('//div[@id="react-select-4--option-0"]')
  }

  selectRole() {
    return cy.get('#react-select-5--value')
  }

  selectRoleOption() {
    return cy.xpath('//div[@id="react-select-5--option-0"]')
  }

  submitBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  startDateTM() {
    return cy.xpath('//input[@value="Start Date"]').last()
  }

  projectToEdit() {
    return cy.xpath('//div[@tabindex="0"]')
  }

  projectDetails() {
    return cy.contains('span', 'Project Detail')
  }

  editProject() {
    return cy.contains('span', 'Edit Project')
  }

  searchBar() {
    return cy.get('#search')
  }

  searchResult() {
    return cy.contains('span', 'Testing Project')
  }
}

export default Project
