import ProcessBill from "../../pages/process_bill/create_process_bill";

const processBillPage = new ProcessBill();

export function clickBillSubMenu() {
    processBillPage.getBillSubMenu().click({force:true});
    processBillPage.getBillModuleName().should('contain', 'Bills');
}

export function clickCreateProcessBillButton() {
    processBillPage.getCreateProcessBillButton().click();
    cy.wait(5000);
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
    processBillPage.getBillDueDate({timeout:5000}).should('not.have.value', '');
}

export function accountSelectionLine1(account1) {
    processBillPage.getAccountDropdownTrigger1().click();
    processBillPage.getAccountDropdownFilter1().type(account1, {force:true});
    processBillPage.getAccountDropdownList1()
    .invoke('text')
    .then((text) => {

        if(text.includes(account1)) {
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
    processBillPage.getBillableCheckboxaccount1().click({force:true});
}

export function ticktaxableAccount1() {
    processBillPage.getTaxableCheckboxAccount1().click({force:true});
}

export function typeAmountAccount1(amount1) {
    processBillPage.getAmountAccount1().type(amount1, {force:true});
}

export function ItemSelectionLine1(item1) {
    processBillPage.getItemTableSelecter().click();
    processBillPage.getItemDropdownTriger1().click();
    processBillPage.getDropdownFilterItem1().type(item1, {force:true});
    processBillPage.getDropdownListItem1()
    .invoke('text')
    .then((text) => {

        if(text.includes(item1)) {
            processBillPage.getFirstItem1().click({force:true});
        } else {
            processBillPage.getDropdownFilterItem1().clear({force:true});
            processBillPage.getDropdownListItem1()
            .find('li')
            .eq(1)
            .click({force:true});
        }
    });
}

export function typeQtyItem1(qty1) {
    processBillPage.getqtyItem1().type(qty1, {force:true});
}

export function typeItemCost1(cost1) {
    processBillPage.getCostItem1().clear({force:true});
    processBillPage.getCostItem1().type(cost1, {force:true})
}

export function assertItemLineAmount1() {
    processBillPage.getItemQty1().then(($qty) => {
        const qty = parseFloat($qty.val());

            processBillPage.getItemCost1().then(($cost) => {
                const cost = parseFloat($cost.val());

                    processBillPage.getItemAmount1().then(($amount) => {
                        const amount = parseFloat($amount.val());
                    
                            const calculatedValue = qty*cost;
                            expect(calculatedValue).to.equal(amount);
                    });
            });
    });
}

export function validateBillHeaderRequiredFields() {
    processBillPage.getVendorRequiredMessage()
    .should('contain', 'Vendor is required');

    processBillPage.getBillDateRequiredMessage()
    .should('contain', 'Bill Date is required'); 

    processBillPage.getBillNumberRequiredMessage()
    .should('contain', 'Bill Number is required');

    processBillPage.getBillAmountRequiredMessage()
    .should('contain', 'Bill Amount is required');

    processBillPage.getBillTermRequiredMessage()
    .should('contain', 'Term is required');   
}

export function validateBillHeaderRequiredFieldsForDraft() {
    processBillPage.getVendorRequiredMessage()
    .should('contain', 'Vendor is required');

    processBillPage.getBillNumberRequiredMessage()
    .should('contain', 'Bill Number is required');
}

export function clickSaveAsApprovedButton() {
    processBillPage.getSaveAsApprovedButton().click();
}

export function clickSaveAsDraftButton() {
    processBillPage.getSaveAsDraftButton().click();
}

export function clickSubmitForApprovalButton() {
    processBillPage.getSubmitForApprovalButton().click();
}

export function getAlert207() {  
    return processBillPage.getAlertMessage207();
}

export function getAlert200() {
    return processBillPage.getAlerttMessage200();
}

export function clickApproversSelector() {
    processBillPage.getApproversSelector().click();
}

export function approvalGroupSelection(approvalGroup1) {
    clickApproversSelector();
    processBillPage.getApprovalGroupDropdownTrigger1().click();
    processBillPage.getApprovalGroupSearchFilter1().type(approvalGroup1, {force:true});
    processBillPage.getApprovalGroupDropdownList1()
    .invoke('text')
    .then((text) => {

        if(text.includes(approvalGroup1)) {
            processBillPage.getFirstApprovalGroup1().click({force:true});
        } else {
            processBillPage.getApprovalGroupSearchFilter1().clear({force:true});
            processBillPage.getApprovalGroupDropdownList1()
            .find('li')
            .eq(0)
            .click({force:true});
        }
    });
}

export function approvalUserSelection1(approvalUser1) {
    processBillPage.getApprovalUserDropdownTrigger1().click();
    processBillPage.getApprovalUserSearchFilter1().type(approvalUser1, {force:true});
    processBillPage.getApprovalUserDropdownList1()
    .invoke('text')
    .then((text) => {

        if(text.includes(approvalUser1)) {
            processBillPage.getFirstApprovalUser1().click({force:true});
        } else {
            processBillPage.getApprovalUserSearchFilter1().clear({force:true});
            processBillPage.getApprovalUserDropdownList1()
            .find('li')
            .eq(0)
            .click({force:true});
        }
    });
}