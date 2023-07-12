class ProcessBill {

    getBillSubMenu() {
        return cy.get('.ng-tns-c394-58.layout-root-menuitem > .p-ripple > .layout-menuitem-icon');
    }

    getBillModuleName() {
        return cy.get('.p-menuitem-text');
    }

    getCreateProcessBillButton() {
        return cy.contains('button', 'Process Bills');
    }

    getPageBody() {
        return cy.get('body');
    }

    // Vendor selection

    getVendorDropdownTriger() {
        return cy.get("p-dropdown[id='vendor'] div[aria-label='dropdown trigger']");
    }

    getvendorDropdownList() {
        return cy.get('#pr_id_83_list');
    }

    getVendorDropDownSearchFilter() {
        return cy.get('.p-dropdown-filter');
    }

    getFirstVendor() {
        return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    // Bill number
    getbillNoField() {
        return cy.get('#billNo');
    }

    //Bill date
    getBillDate() {
        return cy.get('#billDate');
    }

    getBillAmount() {
        return cy.get('#billAmount');
    }

    // Payment selection

    getTermDropdownTrigger() {
        return cy.get("p-dropdown[id='terms'] div[aria-label='dropdown trigger']");
    }

    getTermDropdownList() {
        return cy.get('#pr_id_88_list');
    }

    getTermDropdownFilter() {
        return cy.get('.p-dropdown-filter');
    }

    getFirstTerm() {
        return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    // Due date
    getBillDueDate() {
        return cy.get('#dueDateId');
    }

    // Expense cost line1
    getAccountDropdownTrigger1() {
        return cy.get('#account0 > .p-dropdown > .p-dropdown-trigger');
    }

    getAccountDropdownFilter1() {
        return cy.get('.p-dropdown-filter');
    }

    getAccountDropdownList1() {
        return cy.get('#pr_id_95_list');
    }

    getFirstAccount1() {
        return cy.get(':nth-child(2) > .p-ripple > .grid > .dropdown-list');
    }

    getBillableCheckboxaccount1() {
        return cy.get('#billableExpense_0 > .p-checkbox > .p-checkbox-box');
    }

    getTaxableCheckboxAccount1() {
        return cy.get('#taxableExpense_1 > .p-checkbox > .p-checkbox-box');
    }

    getAmountAccount1() {
        return cy.get('#amount_1');
    }


    // Item cost line1

    getItemTableSelecter() {
        return cy.get('#p-tabpanel-13-label');
    }

    getItemDropdownTriger1() {
        return cy.get('#itemService0 > .p-dropdown > .p-dropdown-trigger');
    }

    getDropdownFilterItem1() {
        return cy.get('.p-dropdown-filter');
    }

    getDropdownListItem1() {
        return cy.get('#pr_id_174_list');
    }

    getFirstItem1() {
        return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    getqtyItem1() {
        return cy.get('#qty_0');
    }

    getCostItem1() {
        return cy.get('#rate_1');
    }

}
export default ProcessBill;