import ProcessBill from "../../pages/process_bill/create_process_bill";

const processBillPage = new ProcessBill();

export function clickBillSubMenu() {
    processBillPage.getBillSubMenu().click({force:true});
    processBillPage.getBillModuleName().should('contain', 'Bills');
}

export function clickCreateProcessBillButton() {
    processBillPage.getCreateProcessBillButton().click();
}

export function vendorSelection(vendor) {
    processBillPage.getVendorDropdownTriger().click();
    processBillPage.getVendorDropDownSearchFilter().should('be.visible').type(vendor, {force:true});
    processBillPage.getvendorDropdownList()
    .invoke('text')
    .then((text) => {

        if(text.includes(vendor)) {
            processBillPage.getFirstVendor().click({force:true});
        } else {
            processBillPage.getVendorDropDownSearchFilter().clear({force:true});
            processBillPage.getvendorDropdownList()
            .find('li')
            .eq(1)
            .click({force:true});
        } processBillPage.getPageBody().click();
    });
}

export function typeBillNo(billNo) {
    processBillPage.getbillNoField().type(billNo);
}

export function typeBillDate(billDate) {
    processBillPage.getBillDate().type(billDate);
}

export function typeBillAmount(billAmount) {
    processBillPage.getBillAmount().type(billAmount);
}

export function billTermSelection(billTerm) {
    processBillPage.getTermDropdownTrigger().click();
    processBillPage.getTermDropdownFilter().type(billTerm, {force:true});
    processBillPage.getTermDropdownList()
    .invoke('text')
    .then((text) => {

        if(text.includes(billTerm)) {
            processBillPage.getFirstTerm().click({force:true});
        } else {
            processBillPage.getTermDropdownFilter().clear({force:true});
            processBillPage.getTermDropdownList()
            .find('li')
            .eq(1)
            .click({force:true});
        } processBillPage.getPageBody().click();
    });
}

export function checkDueDate() {
    processBillPage.getBillDueDate({timeout:5000}).should('have.value', '');
}

export function accountSelectionLine1(account1) {
    processBillPage.getAccountDropdownTrigger1().click();
    processBillPage.getAccountDropdownFilter1().type(account, {force:true});
    processBillPage.getAccountDropdownList1()
    invoke('text')
    .then((text) => {

        if(text.includes(text)) {
            processBillPage.getFirstAccount1().click({force:true});
        } else {
            processBillPage.getAccountDropdownFilter1().clear({force:true});
            processBillPage.getAccountDropdownList1()
            .find('li')
            .eq(1)
            .click({force:true});
        }
    });
}

export function tickBillableAccount1() {
    processBillPage.getBillableCheckboxaccount1().click();
}

export function ticktaxableAccount1() {
    processBillPage.getTaxableCheckboxAccount1().click();
}

export function typeAmountAccount1(amount1) {
    processBillPage.getAmountAccount1().type(amount1);
}

export function ItemSelectionLine1(item1) {
    processBillPage.getItemTableSelecter().click();
    processBillPage.getItemDropdownTriger1().click();
    processBillPage.getDropdownFilterItem1().type(item1, {force:true});
    processBillPage.getDropdownListItem1()
    .invoke('text')
    .then((text) => {

        if(text.includes(text)) {
            processBillPage.getFirstItem1().click({force:true});
        } else {
            processBillPage.getDropdownListItem1()
            .find('li')
            .eq(1)
            .click({force:true});
        }
    });
}

export function typeQtyItem1(qty1) {
    processBillPage.getqtyItem1().type(qty1);
}

export function typeItemCost1(cost1) {
    processBillPage.getCostItem1().then(($cost) => {
        const cost = $cost.val();
            if(cost==="0.00") {
                processBillPage.getCostItem1().type(cost1);
            }
    });
}


