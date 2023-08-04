class PurchaseOrders {

    selectPoSubMenu() {
      return cy.get('.ng-tns-c394-56.layout-root-menuitem > .p-ripple > .layout-menuitem-icon');
    }

    getPoModuleName() {
      return cy.get('.p-menuitem-text');  
    }

    clickCreatePurchaseOrderButton() {
      return  cy.get('.text-right > .p-element > .p-button-label');
    } 

    // Header Department

    departmentDropdown() {
      return  cy.get('#departmentId > .p-dropdown > .p-dropdown-trigger');
    }

    getPoNumberField() {
        return cy.get('input#poNo')
     }

    getDepartmentSearchFilter() {
      return  cy.xpath("//input[@class='p-dropdown-filter p-inputtext p-component']");
    }

    getDepartmentDropDownList() {
      return cy.get('[role="listbox"]');
      //cy.get('#pr_id_54_list', {timeout:5000});
    }

    getFirstSearchedDepartment() {
      return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }


    // Header Vendor

    getFirstSearchedVendor() {
      return  cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    vendorDropdown() {
        return cy.get('#vendorId > .p-dropdown > .p-dropdown-trigger');
      }

    getVendorSearchFilter() {
        return cy.xpath("//input[@class='p-dropdown-filter p-inputtext p-component']");
    }

    getVendorDropdownList() {
        return cy.get('[role="listbox"]');
        //cy.get('#pr_id_55_list', {timeout:5000});
      }

  
    // Submit Date
    submitDateDropdown() {
        return cy.get('#poDate > .p-calendar > .p-element');
    }

    selectsubmitDateDateFromcalendar() {
        return cy.get(':nth-child(3) > :nth-child(5) > .p-ripple');
    }

    // Delevery Date
    deleveryDateDropdown() {
        return cy.get('#deliveryDate > .p-calendar > .p-element');
    }

    selectDeleveryDateFromCalendar() {
        return cy.get(':nth-child(4) > :nth-child(5) > .p-ripple');
    }
      
    // Header required messages

    getPORequiredMessage() {
        return cy.get(':nth-child(2) > .p-invalid');
    }

    getVendorRequiredMessage() {
        return cy.get(':nth-child(3) > .p-invalid');
    }

    // Item Table 

    // Item line-01
    itemDropdownI1() {
        return cy.get('#productId0 > .p-dropdown > .p-dropdown-trigger');
    }

    getItemSearchFilterI1() {
        return cy.xpath("//input[@class='p-dropdown-filter p-inputtext p-component']");
    }

    getFirstSearchedItemI1() {
        return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    getItemDropDownListI1() {
        return cy.get('[role="listbox"]');
        // cy.get('#pr_id_137_list', {timeout:5000});
    }

    // Department line-01

    departmentDropdownI1() {
        return cy.get('#tr_0 > :nth-child(7) > .p-float-label > #departmentIdItem > .p-dropdown > .p-dropdown-trigger');
    }

    getDepartmentSearchFilterI1() {
        return cy.get('.p-dropdown-filter');
    }

    getDepartmentDropDownListI1() {
        return cy.get('[role="listbox"]');
    }

    getFirstSearchedDepartmentI1() {
        return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    // Billable line-01
    getBillableCheckBoxI1() {
        return cy.get('#billable_0 > .p-checkbox > .p-checkbox-box');
    }

    // Taxable line-01
    getTaxableCheckBoxI1() {
        return cy.get('#taxable_0 > .p-checkbox > .p-checkbox-box');
    }

    // Qty line-01
    getQuantityInputI1(qty) {
        return cy.get('#qty_0');
    }
    
    // Get cost-01
    getCostInputI1(cost) {
        return cy.get('#cost0');
    }

    // Get discount-01
    getDiscountInputI1() {
       return cy.get('#discount_0');
    }

    // Get amount-01
    getAmountInputI1() {
       return cy.get('#amount0');
    }

    // Account Table

    getAccountTable() {
       return cy.xpath("//span[normalize-space()='Account Information']");
    }
    
    // Department Line-01

    getAccountDropdownA1() {
        return cy.get('#account0 > .p-dropdown > .p-dropdown-trigger');
    }

    getAccountSearchFilterA1() {
        return cy.get('.p-dropdown-filter');
    }

    getAccountDropdownListA1() {
        return cy.get('[role="listbox"]');
        //cy.get('#pr_id_95_list', {timeout:5000});
    }

    getFirstSearchedAccountA1() {
        return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    getDepartmentDropdownA1 () {
        return cy.get(':nth-child(1) > :nth-child(4) > .p-float-label > #departmentIdAccount > .p-dropdown > .p-dropdown-trigger');
    }
    getDepartmentSearchFilterA1() {
        return cy.get('.p-dropdown-filter');
    }

    getDepartmentDropDownListA1() {
        return cy.get('[role="listbox"]');
    }

    getFirstSearchedDepartmentA1() {
        return cy.get(':nth-child(1) > .p-ripple > .grid > .dropdown-list');
    }

    getAmountA1() {
        return cy.get('#amount_0');
    }

    // Get save as approved
    getSaveAsApproveButton() {
       return cy.xpath("//span[normalize-space()='Save As Approved']");
    }

    // Get save as draft
    getSaveAsDraftButton() {
       return cy.xpath("//span[normalize-space()='Save As Draft']"); 
    }

    // Get submit for approval
    getSubmitForApprovalButton() {
        return cy.xpath("//span[normalize-space()='Submit For Approval']");
    }

    // Get reset
    getResetButton() {
        return cy.xpath("//span[normalize-space()='Reset']");
    }
    
    getAlertMessage207() {
        return cy.get('div[role="alert"].p-toast-message-content', {timeout:10000});
    }

    getAlerttMessage200() {
        return cy.get('div[role="alert"]', {timeout:10000});
    }

    getAlertMessage207Close() {
        return cy.get('.p-toast-icon-close-icon');
    }

    getPageBody() {
        return cy.get('body');
    }


    // Net amount calculation

    getItemGrossAmount() {
        return cy.xpath("//input[@formcontrolname='itemGrossAmount']");
    }

    getAccountGrossAmount() {
        return cy.xpath("//input[@formcontrolname='accountGrossAmount']");
    }

    getTaxCalculationAmountTick() {
        return cy.get(':nth-child(1) > #type');
    }

    getTaxCalculationPercentageTick() {
        return cy.get(':nth-child(2) > #type');
    }

    getTaxAmountOrPercentage() {
        return cy.get('input[formcontrolname="taxAmount"]');
    }

    getDiscountAmount() {
        return cy.get('input[formcontrolname="discountAmount"][readonly]');
    }

    getNetAmount() {
        return cy.get('input[formcontrolname="netAmount"][readonly]');
    }


    // Approvers selection
    // Approval groups1
    getApprovalGroupDropdown1() {
        return cy.get('#approvalGroup10 > .p-dropdown > .p-dropdown-trigger');
    }

    getApprovalGroupSearchFilter() {
        return cy.get('.p-dropdown-filter');
    }

    getApprovalGroupDropdownList1() {
        return cy.get('[role="listbox"]');
        //cy.get('#pr_id_135_list', {timeout:5000});
    }

    getFirstApprovalGroup1() {
        return cy.get('#pr_id_135_list > :nth-child(1) > .p-ripple > .ng-star-inserted');
    }
    

    //Approval users1
    getApprvalUserDropdown1() {
        return cy.get('#approvalUser10 > .p-dropdown > .p-dropdown-trigger');
    }

    getApprovalUserSearchFilter1() {
        return cy.get('.p-dropdown-filter');
    }

    getApprovalUserDropdownList1() {
        return cy.get('[role="listbox"]');
        //cy.get('#pr_id_136_list', {timeout:5000});
    }

    getFirstApprovalUser1() {
        return cy.get('#pr_id_136_list > :nth-child(1) > .p-ripple > .ng-star-inserted');
    }

    
     // Approval groups2
     getApprovalGroupDropdown2() {
        return cy.get('#approvalGroup11 > .p-dropdown > .p-dropdown-trigger');
    }

    getApprovalGroupSearchFilter2() {
        return cy.get('.p-dropdown-filter');
    }

    getApprovalGroupDropdownList2() {
        return cy.get('[role="listbox"]');
    }

    getFirstApprovalGroup2() {
        return cy.get('ul.p-dropdown-items')
        .find('li[role="option"]')
        .first();
    }


    // Approval users2
    getApprvalUserDropdown2() {
        return cy.get('#approvalUser11 > .p-dropdown > .p-dropdown-trigger');
    }

    getApprovalUserSearchFilter2() {
        return cy.get('.p-dropdown-filter');
    }

    getApprovalUserDropdownList2() {
        return cy.get('[role="listbox"]');
    }

    getFirstApprovalUser2() {
        return cy.get('ul.p-dropdown-items')
        .find('li[role="option"]')
        .first();
    }

    getApprovalLinePlusIcon() {
        return cy.get('button.p-element.p-button-icon-only')
        .find('span.p-button-icon.fa-solid.fa-plus');
        
    }

}

export default PurchaseOrders;