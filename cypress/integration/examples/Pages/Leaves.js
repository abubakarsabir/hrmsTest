export class Leaves {
  leavesHeading() {
    return cy.contains('span', 'Leaves')
  }

  leaveApprovals() {
    return cy.contains('span', 'Leave Approvals')
  }

  applyForLeave() {
    return cy.contains('span', ' Apply for Leave')
  }

  leaveApplication() {
    return cy.contains('h2', 'Leave Application')
  }

  reasonForLeave() {
    return cy.xpath('//textarea[@id="leaves-my-leaves-leave-form-leave-reason"]')
  }

  typeOfLeave() {
    return cy.get('#leaves-my-leaves-leave-form-leave-type-input')
  }

  annualOption() {
    return cy.xpath('//li[@data-value="annual"]')
  }

  leaveDate() {
    return cy.get('#leaves-my-leaves-leave-form-leave-start-date-input')
  }

  okBtn() {
    return cy.contains('span', 'OK')
  }

  applyForLeavebtn() {
    return cy.contains('span', 'APPLY FOR LEAVE')
  }

  searchLeave() {
    return cy.get('#search')
  }

  leavesinList() {
    return cy.get('#leaves-leave-approvals-leaves-list-1')
  }

  ApproveLeaveBox() {
    return cy.get('.MuiIconButton-label')
  }

  leaveApprovalSubmit() {
    return cy.contains('span', 'Submit')
  }

  holidaysTab() {
    return cy.contains('span', 'Holidays')
  }

  addHoliday() {
    return cy.contains('span', 'Add Holiday')
  }

  addHolidayHeading() {
    return cy.contains('h2', 'Add Holidays')
  }

  nameofHoliday() {
    return cy.xpath('//input[@name="name"]')
  }

  calendarIcon() {
    return cy.xpath('//input[@value="Date"]')
  }

  okBtnCalender() {
    return cy.contains('span', 'OK')
  }

  addHolidaybtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  editleavebtn() {
    return cy.xpath('//button[@title="Edit leave"]').last()
  }

  reasonLeaveEdit() {
    return cy.xpath('//textarea[@name="reason"]')
  }

  updateBtn() {
    return cy.xpath('//button[@type="submit"]')
  }

  leaveSummary() {
    return cy.contains('span', 'Leave Summary')
  }

  leaveSearch() {
    return cy.get('#search')
  }

  leaveYear() {
    return cy.xpath('//select[@name="year"]')
  }

  dateFilter() {
    return cy.get('.DateRangePicker')
  }

  leavePolicy() {
    return cy.contains('span', 'Leave Policy')
  }

  addLeavePolicy() {
    return cy.contains('span', 'Add Leaves Policy')
  }

  typeofLeavep() {
    return cy.get('#mui-component-select-leave_type')
  }

  selectTypeofLeave() {
    return cy.xpath('//li[@data-value="annual"]')
  }

  typeOfEmployment() {
    return cy.get('#mui-component-select-employment_type')
  }

  selectTypeOfEmployment() {
    return cy.xpath('//li[@data-value="permanent"]')
  }

  year() {
    return cy.get('#mui-component-select-year')
  }

  selectYear() {
    return cy.xpath('//li[@data-value="2021"]')
  }

  quota() {
    return cy.xpath('//input[@name="quota"]')
  }

  submit() {
    return cy.xpath('//button[@type="submit"]')
  }

  mannualAdjustment() {
    return cy.contains('span', 'Manual Adjustment')
  }

  addLeave() {
    return cy.contains('span', 'Add Leave')
  }

  selectAUserBox() {
    return cy.get('#react-select-2--value')
  }

  selectAUser() {
    return cy.get('#react-select-2--option-6')
  }

  selectYearBox() {
    return cy.get('#mui-component-select-year')
  }

  selectaYearBox() {
    return cy.xpath('//li[@data-value="2018"]')
  }

  ReasonForLeaveAdd() {
    return cy.xpath('//textarea[@name="reason"]')
  }

  typeOfLeaveAdd() {
    return cy.get('#mui-component-select-leave_type')
  }

  typeOfLeaveSelect() {
    return cy.xpath('//li[@data-value="annual"]')
  }

  calendar() {
    return cy.xpath('//input[@value="Choose Date"]')
  }

  addLeaveAdd() {
    return cy.xpath('//button[@type="submit"]')
  }
}

export default Leaves
