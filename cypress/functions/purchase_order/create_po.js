import PurchaseOrders from "../../pages/purchase_order/Create_po";
   
   const purchaseOrdersPage = new PurchaseOrders();
   
   export function departmentSelection(department) {
        purchaseOrdersPage.departmentDropdown().click();
        purchaseOrdersPage.getDepartmentSearchFilter().should('be.visible').type(department, {force:true})
        purchaseOrdersPage.getDepartmentDropDownList()
            .invoke('text') // Invoke the 'text' property of the element (retrieve the text content)
            .then((text) => { // Perform actions on the retrieved text
        
            if (text.includes(department)) {
                purchaseOrdersPage.getFirstSearchedDepartment().click({force:true});
            } else {
                purchaseOrdersPage.getDepartmentSearchFilter().clear();
                purchaseOrdersPage.getDepartmentDropDownList()
                .find('li')
                .eq(1)
                .click({force:true});
            }   purchaseOrdersPage.getPageBody().click();
        }); 
    }

    export function vendorSelection(vendor) {
        purchaseOrdersPage.vendorDropdown().click();
        purchaseOrdersPage.getVendorSearchFilter().should('be.visible').type(vendor, { force: true });
        purchaseOrdersPage.getVendorDropdownList()
        .invoke('text')
        .then((text) => {

            if (text.includes(vendor)) {
            purchaseOrdersPage.getFirstSearchedVendor().click({ force: true });
            } else {
            purchaseOrdersPage.getVendorSearchFilter().clear();
            purchaseOrdersPage.getVendorDropdownList()
                .find('li')
                .eq(1)
                .click({ force: true });
            }   purchaseOrdersPage.getPageBody().click();
        });
    }

    export function submitDateSelection() {
        purchaseOrdersPage.submitDateDropdown().click();
        purchaseOrdersPage.selectsubmitDateDateFromcalendar().should('be.visible').click({force:true});
    }

    export function deleveryDateSelection() {
        purchaseOrdersPage.deleveryDateDropdown().click();
        purchaseOrdersPage.selectDeleveryDateFromCalendar().should('be.visible').click({force:true});
    }

    // Item Information

    export function itemSelectionI1(item) {
        purchaseOrdersPage.itemDropdownI1().click();
        purchaseOrdersPage.getItemSearchFilterI1().should('be.visible').type(item, {force:true})
        purchaseOrdersPage.getItemDropDownListI1()
        .invoke('text')
        .then((text) => {

            if (text.includes(item)) {
                purchaseOrdersPage.getFirstSearchedItemI1().click({force:true});
            } else {
                purchaseOrdersPage.getItemSearchFilterI1().clear();
                purchaseOrdersPage.getItemDropDownListI1()
                .find('li')
                .eq(1)
                .click({force:true});
            }   purchaseOrdersPage.getPageBody().click();
        });
    }

    export function departmentSelectionI1(department) {
        purchaseOrdersPage.departmentDropdownI1().click({force:true});
        purchaseOrdersPage.getDepartmentSearchFilterI1().should('be.visible').type(department, {force:true})
        purchaseOrdersPage.getDepartmentDropDownListI1()
        .invoke('text')
        .then((text) => {
            if(text.includes(department)) {
                purchaseOrdersPage.getFirstSearchedDepartmentI1().click({force:true});
            } else {
                purchaseOrdersPage.getDepartmentSearchFilterI1().clear();
                purchaseOrdersPage.getDepartmentDropDownListI1()
                .find('li')
                .eq(1)
                .click({force:true});
            }   purchaseOrdersPage.getPageBody().click(0, 0);;
        })
    }

    export function typeQty1(qty) {
        purchaseOrdersPage.getQuantityInputI1().type(qty, {force:true})
    }

    export function typeCost(cost) { 
        purchaseOrdersPage.getCostInputI1().then(($inputField) => {
            const value = $inputField.val();
            if (value === "0.00") 
                purchaseOrdersPage.getCostInputI1().type(cost, {force:true});
         });
        } 

   export function typeDiscount(discount) {
        purchaseOrdersPage.getDiscountInputI1().type(discount, {force:true});   
        }
    
   export function assertItemLineAmount() {
        purchaseOrdersPage.getQuantityInputI1().then(($quantityInput) => {
            const quantity = parseFloat($quantityInput.val());
        
                purchaseOrdersPage.getCostInputI1().then(($costInput) => {
                const cost = parseFloat($costInput.val());
        
                    purchaseOrdersPage.getDiscountInputI1().then(($discountInput) => {
                    const discount = parseFloat($discountInput.val());
        
                        purchaseOrdersPage.getAmountInputI1().then(($amountInput) => {
                        const amount = parseFloat($amountInput.val());
        
                        const calculatedValue = (quantity * cost) - discount;
                        expect(calculatedValue).to.equal(amount);
              });
            });
         });
      });     
    }

    export function accounSelection1(account) {
        purchaseOrdersPage.getAccountTable().click({force:true});
        purchaseOrdersPage.getAccountDropdownA1().should('be.visible').click({force:true});
        purchaseOrdersPage.getAccountSearchFilterA1().type(account, {force:true});
        purchaseOrdersPage.getAccountDropdownListA1()
        .invoke('text')
        .then((text) => {

            if(text.includes(account)) {
                purchaseOrdersPage.getFirstSearchedAccountA1().click({force:true});
            } else {
                purchaseOrdersPage.getAccountSearchFilterA1().clear();
                purchaseOrdersPage.getAccountDropdownListA1()
                .find('li')
                .eq(1)
                .click({force:true})
            }
        })
    }

    export function departmentSelectionA1(department) {
        purchaseOrdersPage.getDepartmentDropdownA1().click();
        purchaseOrdersPage.getDepartmentSearchFilterA1().type(department, {force:true});
        purchaseOrdersPage.getDepartmentDropDownListA1()
        .invoke('text')
        .then((text) => {

            if(text.includes(department)) {
                purchaseOrdersPage.getFirstSearchedDepartmentA1().click({force:true});
            } else {
                purchaseOrdersPage.getDepartmentSearchFilterA1.clear();
                purchaseOrdersPage.getDepartmentDropDownListA1()
                .find('li')
                .eq(1)
                .click({force:true});
            }   purchaseOrdersPage.getPageBody().click();
        })
    }

    export function AssertNetAmountWithTaxAmount(tax) {
        purchaseOrdersPage.getItemGrossAmount().then(($itemTotal) => {
        const itemTotal = parseFloat($itemTotal.val().replace(/,/g, ''));

                purchaseOrdersPage.getAccountGrossAmount().then(($accountTotal) =>{
                    const accountTotal = parseFloat($accountTotal.val().replace(/,/g, ''));
            
                    purchaseOrdersPage.getTaxCalculationAmountTick().click({force:true});
                    purchaseOrdersPage.getTaxAmountOrPercentage().type(tax, {force:true})

                        purchaseOrdersPage.getDiscountAmount().then(($totalDiscount) => {
                            const totalDiscount = parseFloat($totalDiscount.val().replace(/,/g, ''));

                                purchaseOrdersPage.getNetAmount().then(($netAmount) => {
                                    const netAmount = parseFloat($netAmount.val().replace(/,/g, ''));

                                        purchaseOrdersPage.getTaxAmountOrPercentage().then(($tax) => {
                                            const tax = parseFloat($tax.val().replace(/,/g, ''));
                                        
                                            const calculatedValue = itemTotal + accountTotal + tax - totalDiscount;
                                            expect(calculatedValue).to.equal(netAmount);
                                        })
                                })
                        })
                })

        })
    }

    export function approvalGroupSelection1(approvalGroup1) {
        purchaseOrdersPage.getApprovalGroupDropdown1().click();
        purchaseOrdersPage.getApprovalGroupSearchFilter().should('be.visible').type(approvalGroup1, {force:true});
        purchaseOrdersPage.getApprovalGroupDropdownList1()
        .invoke('text')
        .then((text) => {

            if(text.includes(approvalGroup1)) {
                purchaseOrdersPage.getFirstApprovalGroup1().click({force:true});
            } else {
                purchaseOrdersPage.getApprovalGroupSearchFilter().clear();
                purchaseOrdersPage.getApprovalGroupDropdownList1()
                .find('li')
                .eq(0)
                .click({force:true});
            } purchaseOrdersPage.getPageBody().click();
        })
    }

    export function approvalUserSelection1(approvalUser1) {
        purchaseOrdersPage.getApprvalUserDropdown1().click();
        purchaseOrdersPage.getApprovalUserSearchFilter1().should('be.visible').type(approvalUser1, {force:true});
        purchaseOrdersPage.getApprovalUserDropdownList1()
        .invoke('text')
        .then((text) => {

            if(text.includes(approvalUser1)) {
                purchaseOrdersPage.getFirstApprovalUser1().click({force:true});
            } else {
                purchaseOrdersPage.getApprovalUserSearchFilter1().clear();
                purchaseOrdersPage.getApprovalUserDropdownList1()
                .find('li')
                .eq(0)
                .click({force:true});
            } purchaseOrdersPage.getPageBody().click();
        })
    }

    export function approvalGroupSelection2(approvalGroup2) {
        purchaseOrdersPage.getApprovalGroupDropdown2().click({force:true});
        purchaseOrdersPage.getApprovalGroupSearchFilter2().should('be.visible').type(approvalGroup2, {force:true});
        purchaseOrdersPage.getApprovalGroupDropdownList2()
        .invoke('text')
        .then((text) => {

            if(text.includes(approvalGroup2)) {
                purchaseOrdersPage.getFirstApprovalGroup2().click({force:true});
            } else {
                purchaseOrdersPage.getApprovalGroupDropdownList2()
                .find('li')
                .eq(0)
                .click({fore:true});
            } purchaseOrdersPage.getPageBody().click();
        })
    }

    export function approvalUserSelection2(approvalUser2) {
        purchaseOrdersPage.getApprvalUserDropdown2().click({force:true});
        purchaseOrdersPage.getApprovalUserSearchFilter2().type(approvalUser2, {force:true});
        purchaseOrdersPage.getApprovalUserDropdownList2()
        .invoke('text')
        .then((text) => {

            if(text.includes(approvalUser2)) {
                purchaseOrdersPage.getFirstApprovalUser2().click({force:true});
            } else {
                purchaseOrdersPage.getApprovalUserDropdownList2()
                .find('li')
                .eq(0)
                .click({force:true});
            } purchaseOrdersPage.getPageBody().click();
        })
    }

    export function validateHeaderRequiredFields() {
        purchaseOrdersPage.getPORequiredMessage()
        .should('contain', 'PO Number is required');
        
        purchaseOrdersPage.getVendorRequiredMessage()
        .should('contain', 'Vendor is required');

        clickResetButton();
    }

    export function typeAmountA1(amount) {
        purchaseOrdersPage.getAmountA1().type(amount, {force:true});
    }
    
    export function getAlert207() {  
        return purchaseOrdersPage.getAlertMessage207();
    }

    export function getAlert200() {
        return purchaseOrdersPage.getAlerttMessage200();
    }

    export function closeAlertMessage207() {
        purchaseOrdersPage.getAlertMessage207Close().click({force:true});
    }
    
    export function clickSaveAsApprovedButton() {
        purchaseOrdersPage.getSaveAsApproveButton().click();
    }

    export function clickSaveAsDraftButton() {
        purchaseOrdersPage.getSaveAsDraftButton().click();
    }

    export function clickSubmitForApprovalButton() {
        purchaseOrdersPage.getSubmitForApprovalButton().click();
    }

    export function clickResetButton() {
        purchaseOrdersPage.getResetButton().click();
    }

    export function clickPoSubmenu(po) {
        purchaseOrdersPage.selectPoSubMenu().click({force:true});
        purchaseOrdersPage.getPoModuleName().should('contain', po);
    }

    export function clickCreatePoButton() {
        purchaseOrdersPage.clickCreatePurchaseOrderButton().click();
    }

    export function clickapprovalLinePlusIcon() {
        purchaseOrdersPage.getApprovalLinePlusIcon().click({force:true});
    }

    export function typePONumber() {
        purchaseOrdersPage.getPoNumberField.type(poNo, {force:true});
    }

    