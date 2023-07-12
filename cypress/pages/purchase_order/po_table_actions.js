import Login from "../../pages/Login"
import TenantOrPortal from "../../pages/TenantOrPortal";

class PurchaseOrderActions {

    getPoNumberField() {
       return cy.get('input#poNo')
    }

    getPageBody() {
        return cy.get('body');
    }

    getPoSearchFilter() {
       return cy.get(':nth-child(3) > span > [style="max-width: 135px;"] > .p-fluid > .p-inputtext')
    }

    // getActionButton1() {
    //    return cy.xpath("//span[@class='p-button-icon pi pi-ellipsis-v']");
    // }

    getActionButton() {
       return cy.get('button.p-element.grid-action-btn')
       .eq(0);
       //cy.xpath("//tbody/tr[1]/td[16]/span[2]/button[1]/span[1]", {timeout:10000}); 
    }

    // PO Approval
    
    getApproveOrRejectAction() {
       return cy.get('.p-menuitem-text').contains('Approve or Reject');
    }

    getApprovalScreenLable() {
       return cy.get('.module-header-label', {timeout:10000});
    }

    getApprovalPDFreport() {
       return cy.get('app-po-approval-invoice-view.ng-star-inserted > .ng-star-inserted', {timeout:10000});
        //cy.get('iframe[title="Purchase Order"]', {timeout:10000}).should('be.visible');
    }

    getAuditTrailButton() {
       return cy.get('.button-set-wrapper > :nth-child(2) > .p-element');
    }

    getAuditTrailLable() {
       return cy.get('.p-sidebar-lg > .p-sidebar-header', {timeout:10000});
    }

    getRejectButton() {
       return cy.contains('button', 'Reject');
    }

    getApproveButton() {
       return cy.contains('button', 'Approve');
    }

    getApproveScreenCloseButton() {
       return cy.get('.fa-close');
    }

    getRejectCommentInputBox() {
        return cy.get('#comment');
    }

    getAlerttMessage200() {
        return cy.get('div[role="alert"]', {timeout:10000});
    }

    getAlertMessage207Close() {
        return cy.get('.p-toast-icon-close-icon');
    }

    // PO Edit

    getPoEditAction() {
        return cy.get('.p-menuitem-text').contains('Edit');
    }

    getPoEditLable() {
        return cy.get('.module-header-label', {timeout:10000});
    }

    getPoEditScreenResetButton() {
        return cy.contains('button', 'Reset');
    }

    getPoSaveButton() {
        return cy.contains('button', 'Save');
    }

    getPoEditSubmitButon() {
        return cy.contains('button', 'Submit For Approval', {timeout:10000});
    }

    getPoEditScreenVendorDropdownList() {
        //return cy.get('ul.p-dropdown-items', {timeout:5000});
        return cy.get('#pr_id_75_list', {timeout:5000});
    }

    getPoEditSubmitButoon() {
        return cy.get('button', 'Submit For Approval');
    }

    getPoEditScreenItemDropDownList1() {
        return cy.get('#pr_id_144_list', {timeout:5000});
    }
      
    getPoEditScreenAccountDropdownList1() {
        return cy.get('#pr_id_140_list', {timeout:5000});
    }

    getPoEditScreenItemGrossAmount() {
        return cy.get('input[formcontrolname="itemGrossAmount"].p-inputtext');      
    }

    getPoEditScreenAccountGrossAmount() {
        return cy.get('input[formcontrolname="accountGrossAmount"].p-inputtext');
    }

    getPoEditScreenTaxCalculationAmountTick() {
        return cy.get(':nth-child(1) > #type');
    }

    getPoEditScreenTaxAmountOrPercentage() {
        return cy.get('input[formcontrolname="taxAmount"].p-inputtext');
    }

    getPoEditScreenDiscountAmount() {
        return cy.get('input[formcontrolname="discountAmount"].p-inputtext');
    }

    getPoEditScreenNetAmount() {
        return cy.get('input[formcontrolname="netAmount"].p-inputtext');
    }


    clcickApproversPlusIcon() {
        return cy.get('button.p-button-icon-only[iconpos="left"][icon="fa-solid fa-plus"]');
    }

    getPoEditApprovalGroupDropdown() {
        return cy.get('#approvalGroup0 > .p-dropdown > .p-dropdown-trigger');
        //cy.xpath("//p-dropdown[@id='approvalGroup1']//div[@aria-label='dropdown trigger']");
    }

    getPoEditApprovalGroupSearchFilter() {
        return cy.get('.p-dropdown-filter');
    }

    getPoEditApprovalGroupList() {
        return cy.get('ul.p-dropdown-items li[role="option"]', {timeout:5000})
        //cy.xpath("//ul[@id='pr_id_233_list']", {timeout:10000});
    }

    getPoEditFirstApprovalGroup() {
        return cy.get('#pr_id_166_list > :nth-child(1) > .p-ripple > .ng-star-inserted');
    }


    // Download Report
    getDownloadReportAction() {
        return cy.get('.p-menuitem-text').contains('Download Report');
    }

    // Delete
    getDeleteAction() {
        return cy.get('.p-menuitem-text').contains('Delete');
    }

    getDeleteConfirmationButton() {
        return cy.contains('button', 'Yes, Delete it');
    }

    // Audit Trail
    getAuditTrailAction() {
        return cy.get('.p-menuitem-text').contains('Audit Trail');
    }

    getAuditTrailSidePanelHeader() {
        return cy.get('.p-sidebar-header', {timeout:10000});
    }

    getAuditTrailSidePanelCloseIcon() {
        return cy.get('.p-sidebar-close-icon');
    }

    // Export
    getExportAction() {
        return cy.get('.p-menuitem-text').contains('Export');
    }

    // Detail View
    getDetailViewAction() {
        return cy.get('.p-menuitem-text').contains('Detail View');
    }

    getDetailViewHeader() {
        return cy.xpath("//h5[normalize-space()='Purchase Order Details']", {timeout:10000});
    }

    getDetailViewPdfReport() {
        return cy.get('app-po-approval-invoice-view.ng-star-inserted > .ng-star-inserted', {timeout:10000});
    }

    getDetailViewCloseIcon() {
        return cy.get('.fa-close');
    }

    getDetailViewBinIcon() {
        return cy.get('.top-button-wrapper > .fa-trash');
    }

    getDeatilViewEditIcon() {
        return cy.get('.fa-pencil');
    }

    // Undo
    getUndoAction() {
        return cy.get('.p-menuitem-text').contains('Undo');
    }

    getConfirmationPopupMessage() {
        return cy.get('.p-confirm-dialog-message', {timeout:10000});
    }

    getConfirmationYesButton() {
        return cy.contains('button', 'Yes, Undo it');
    }

    // Close
    getCloseAction() {
        return cy.get('.p-menuitem-text').contains('Close'); 
    }

    // Reopen
    getReopenAction() {
        return cy.get('.p-menuitem-text').contains('Reopen'); 
    }

    // Resubmit
    getEditAndResubmitAction() {
        return cy.get('.p-menuitem-text').contains('Edit & Resubmit');
    }

    getResubmitButton() {
        return cy.contains('button', 'Resubmit');
    }

    // Draft edit screen

    getDraftEditAction() {
        return cy.get('.p-menuitem-text').contains('Edit');
    }

    getDraftEditSaveAsApprovedButton() {
        return cy.contains('button', 'Save As Approved');
    }
    
    getDraftEditSubmitButton() {
        return cy.get('.submitBtn');
    }


    // Bulk Actions
    // Tick on table 1st checkbox
    get1stCheckboxInTable() {
        return cy.get('div.p-checkbox.p-component input[type="checkbox"]')
        .first();
    }

    getBulkFilterAction() {
        return cy.get('span[ptooltip="Filters"] > .p-element > .p-button-icon');
    }

    getBulkQuickApproveAction() {
        return cy.get('[ptooltip="Quick Approve"] > .p-element > .p-button-icon');
    }

    getBulkRejectAction() {
        return cy.get('[ptooltip="Reject"] > .p-element > .p-button-icon');
    }

    getBulkReopenAction() {
        return cy.get('[ptooltip="Reopen"] > .p-element > .p-button-icon')
    }

    getBulkCloseAction() {
        return cy.get('[ptooltip="Close"] > .p-element > .p-button-icon');
    }

    getBulkDeleteAction() {
        return cy.get('[ptooltip="Delete"] > .p-element > .p-button-icon');
    }

    getBulkEmailToVendorAction() {
        return cy.get('[ptooltip="Email To Vendor"] > .p-element > .p-button-icon')
    }
    
    getBulkExportAction() {
        return cy.get(':nth-child(9) > .p-element > .p-button-icon');
    }

    getBulkDownloadAction() {
        return cy.get(':nth-child(10) > .p-element > .p-button-icon')
    }

    getBulkSearchSidePanelHeader() {
        return cy.get('.p-sidebar-header', {timeout:5000});
    }

    getQuickApproveConfirmationBox() {
        return cy.get('.p-confirm-dialog-message.ng-tns-c317-181', {timeout:5000});
    }

    getQuickAproveConfirmationYesButton() {
        return cy.contains('button', 'Yes, Approve it');
    }

    getBulkRejectConfirmationBox() {
        return cy.get('.p-confirm-dialog-message.ng-tns-c317-182');
    }

    getBulkRejectConfirmationYesButton() {
        return cy.contains('button', 'Yes, Reject it');
    }

    getColumnsSidebarHeader() {
        return cy.get('.p-sidebar-header', {timeout:5000});
    }

    getBulkColumnsAction() {
        return cy.get('[ptooltip="Columns"] > .p-element');
    }

    getBulkDeleteConfirmationYseButton() {
        return cy.contains('button', 'Yes, Delete it');
    }

}


export default PurchaseOrderActions;

