import Inventory from '../../Pages/Inventory'
import NavBar from '../../Pages/NavBar'

beforeEach(() => {
  cy.Login()
})

describe('Smoke:Inventory Test', () => {
  const navbar = new NavBar()
  const inventorypage = new Inventory()

  it('C53: User can create inventory.', () => {
    navbar.sideNavInventory().should('be.visible').click()
    cy.url().should('include', 'item')
    inventorypage.inventoryCentre().should('be.visible')
    inventorypage.inventoryDashboard().should('be.visible').click()
    inventorypage.createInventoryBtn().should('be.visible').click()
    inventorypage.newItem().should('be.visible')
    inventorypage.serialNo().should('be.visible').type('D1234')
    inventorypage.nameText().should('be.visible').type('Macbook 15')
    inventorypage.priceText().should('be.visible').type('95000')
    inventorypage.descriptionText().should('be.visible').type('This is a testing product')
    inventorypage.purchaseDate().should('be.visible').click()
    inventorypage.calendarOkbtn().should('be.visible').click()
    inventorypage.vendorDropDown().should('be.visible').click()
    inventorypage.vendorSelectValue().should('be.visible').click()
    inventorypage.categoryDropDown().should('be.visible').click()
    inventorypage.categorySelectValue().should('be.visible').click()
    cy.intercept('POST', 'items').as('postitem')
    inventorypage.createButton().should('be.visible').click()
    cy.wait('@postitem')
    cy.get('@postitem').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C54: User can search inventory by using name and description.', () => {
    navbar.sideNavInventory().should('be.visible').click()
    cy.url().should('include', 'item')
    inventorypage.inventoryCentre().should('be.visible')
    inventorypage.manageCategory().should('be.visible').click()
    inventorypage.manageSearch().should('be.visible').type('laptop')
    inventorypage.searchResults().should('be.visible')
  })

  it('C55: Users can create office.', () => {
    navbar.sideNavInventory().should('be.visible').click()
    cy.url().should('include', 'item')
    inventorypage.mangageOffice().should('be.visible').click()
    inventorypage.createOffice().should('be.visible').click()
    inventorypage.newOffice().should('be.visible').click()
    inventorypage.addressNewOffice().should('be.visible').type('Our New Office')
    cy.intercept('POST', 'offices').as('postoffices')
    inventorypage.createOfficeBtn().should('be.visible').click()
    cy.wait('@postoffices')
    cy.get('@postoffices').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C56: Users can create vendor.', () => {
    navbar.sideNavInventory().should('be.visible').click()
    cy.url().should('include', 'item')
    inventorypage.manageVendor().should('be.visible').click()
    inventorypage.createVendor().should('be.visible').click()
    inventorypage.newVendor().should('be.visible').click()
    inventorypage.vendorNameText().should('be.visible').type('Tester 1')
    inventorypage.vendorDescriptionText().should('be.visible').type('Tester Details are here')
    inventorypage.vendorAddressText().should('be.visible').type('Tester Address')
    inventorypage.vendorContactNoText().scrollIntoView().should('be.visible').type('031234567890')
    inventorypage.vendorCityText().scrollIntoView().should('be.visible').type('Tester City')
    cy.intercept('POST', 'vendors').as('postvendors')
    inventorypage.createVendorBtn().scrollIntoView().should('be.visible').click()
    cy.wait('@postvendors')
    cy.get('@postvendors').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C57: Users can create category.', () => {
    navbar.sideNavInventory().should('be.visible').click()
    cy.url().should('include', 'item')
    inventorypage.manageCategory().should('be.visible').click()
    inventorypage.createCategory().should('be.visible').click()
    inventorypage.newCategory().should('be.visible').click()
    inventorypage.categoryNameText().should('be.visible').type('Category Tester 1')
    inventorypage.categoryDescritionText().should('be.visible').type('Category Tester Details are here')
    cy.intercept('POST', 'categories').as('postcategories')
    inventorypage.createCategoryBtn().should('be.visible').click()
    cy.wait('@postcategories')
    cy.get('@postcategories').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })

  it('C58: User can assign inventory.', () => {
    navbar.sideNavInventory().should('be.visible').click()
    cy.url().should('include', 'item')
    inventorypage.inventoryDashboard().should('be.visible').click()
    inventorypage.assignToBtn().scrollIntoView().should('be.visible').click()
    inventorypage.statusAssign().should('be.visible').click()
    inventorypage.selectStatusValue().should('be.visible').click()
    inventorypage.assignTo().should('be.visible').click()
    inventorypage.selectAssignToValue().should('be.visible').click()
    inventorypage.selectUser().should('be.visible').click()
    inventorypage.userValue().should('be.visible').click()
    cy.intercept('POST', 'item_allocations').as('postitem_allocations')
    inventorypage.assignItemBtn().should('be.visible').click()
    cy.wait('@postitem_allocations')
    cy.get('@postitem_allocations').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.statusMessage).to.equal('OK')
    })
  })
})
