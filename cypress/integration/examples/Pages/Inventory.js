export class Inventory {
  inventoryCentre() {
    return cy.contains('span', 'Inventory Centre')
  }

  createInventoryBtn() {
    return cy.contains('span', 'Create Inventory')
  }

  newItem() {
    return cy.contains('span', 'New Item')
  }

  serialNo() {
    return cy.xpath('//input[@name="serial_no"]')
  }

  nameText() {
    return cy.xpath('//input[@name="name"]')
  }

  priceText() {
    return cy.xpath('//input[@name="price"]')
  }

  descriptionText() {
    return cy.xpath('//textarea[@name="description"]')
  }

  purchaseDate() {
    return cy.xpath('//input[@value="Purchase Date"]')
  }

  vendorDropDown() {
    return cy.get('#mui-component-select-vendor_id')
  }

  vendorSelectValue() {
    return cy.xpath('//li[@data-value="1"]')
  }

  categoryDropDown() {
    return cy.get('#mui-component-select-category_id')
  }

  categorySelectValue() {
    return cy.xpath('//li[@data-value="1"]')
  }

  createButton() {
    return cy.contains('span', 'Create')
  }

  calendarOkbtn() {
    return cy.contains('span', 'OK')
  }

  manageCategory() {
    return cy.contains('span', 'Manage Category')
  }

  manageSearch() {
    return cy.get('#search')
  }

  searchResults() {
    return cy.contains('td', 'Laptop')
  }

  mangageOffice() {
    return cy.contains('span', 'Manage Office')
  }

  createOffice() {
    return cy.contains('span', 'Create Office')
  }

  newOffice() {
    return cy.contains('h2', 'New Office')
  }

  addressNewOffice() {
    return cy.xpath('//input[@name="address"]')
  }

  createOfficeBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  manageVendor() {
    return cy.contains('span', 'Manage Vendor')
  }

  createVendor() {
    return cy.contains('span', 'Create Vendor')
  }

  newVendor() {
    return cy.contains('h2', 'New Vendor')
  }

  vendorNameText() {
    return cy.xpath('//input[@name="name"]')
  }

  vendorDescriptionText() {
    return cy.xpath('//textarea[@name="description"]')
  }

  vendorAddressText() {
    return cy.xpath('//textarea[@aria-invalid="false"]').eq(1)
  }

  vendorContactNoText() {
    return cy.xpath('//input[@aria-invalid="false"]').eq(2)
  }

  vendorCityText() {
    return cy.xpath('//input[@aria-invalid="false"]').eq(3)
  }

  createVendorBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  createCategory() {
    return cy.contains('span', 'Create Category')
  }

  newCategory() {
    return cy.contains('h2', 'New Category')
  }

  categoryNameText() {
    return cy.xpath('//input[@name="name"]')
  }

  categoryDescritionText() {
    return cy.xpath('//textarea[@name="description"]')
  }

  createCategoryBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  inventoryDashboard() {
    return cy.contains('span', 'Inventory Dashboard')
  }

  assignToBtn() {
    return cy.get('.MuiTableRow-hover').children().eq(7).children()
  }

  statusAssign() {
    return cy.get('#mui-component-select-status')
  }

  selectStatusValue() {
    return cy.xpath('//li[@tabindex="0"]').eq(1)
  }

  assignTo() {
    return cy.get('#mui-component-select-assignable_type')
  }

  selectAssignToValue() {
    return cy.xpath('//li[@tabindex="0"]').eq(1)
  }

  selectUser() {
    return cy.contains('div', 'Select a User')
  }

  userValue() {
    return cy.get('#react-select-2--option-0')
  }

  assignItemBtn() {
    return cy.xpath('//button[@type="submit"]')
  }
}

export default Inventory
