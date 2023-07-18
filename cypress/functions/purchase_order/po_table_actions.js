import PurchaseOrders from "../../pages/purchase_order/Create_po";
import PurchaseOrderActions from "../../pages/purchase_order/po_table_actions";

const poActionsPage = new PurchaseOrderActions();
const purchaseOrdersPage = new PurchaseOrders();

// PO Approval

export function searchCreatedPO(poNumber) {
    poActionsPage.getPoSearchFilter().clear();
    poActionsPage.getPoSearchFilter().type(poNumber, {force:true})
    .then(() => cy.wait(2000));
}

export function typePoNumber(poNumber) {
    poActionsPage.getPoNumberField().type(poNumber, {force:true});
}

export function getActionButton() {
    cy.wait(3000).then(() => {
    poActionsPage.getActionButton().click({force:true})});
}
  
export function goToPoApprovalScreen() {
    getActionButton();
    poActionsPage.getApproveOrRejectAction().click({force:true});
    poActionsPage.getApprovalScreenLable().should('contain', 'Purchase Order Details');
    poActionsPage.getApprovalPDFreport().should('be.visible');
    poActionsPage.getAuditTrailButton().should('be.visible')
    poActionsPage.getApproveButton().should('be.visible');
}

export function goToPoAuditTrail() {
    poActionsPage.getAuditTrailButton().click();
    poActionsPage.getAuditTrailLable().should('contain', 'Audit Trail');
}

export function clickOnApproveButton() {
    poActionsPage.getApproveButton().click({force:true});
}

export function typeRejectComment(rejectComment) {
    poActionsPage.getRejectCommentInputBox().type(rejectComment);
}

export function clickRejectButton() {
    poActionsPage.getRejectButton().click();
}

export function clickApprovalScreenCloseButton() {
    poActionsPage.getApproveScreenCloseButton().click();
}

// PO edit & resubmit

export function goToPoEditAndResubmitScreen() {
    getActionButton();
    poActionsPage.getEditAndResubmitAction().click({force:true})
    .then(() => cy.wait(6000));
}

export function clickResubmitButton() {
    poActionsPage.getResubmitButton().should('be.visible').click({force:true});
}

// PO Edit

export function goToEditScreen() {
    getActionButton();
    poActionsPage.getPoEditAction().click({force:true});
    poActionsPage.getPoEditLable().should('contain', 'Edit Purchase Order');
    poActionsPage.getPoEditScreenResetButton().should('be.visible');
    poActionsPage.getPoSaveButton().should('be.visible').then(() => cy.wait(3000));
}

export function vendorSelectionInEdit(vendor) {
    purchaseOrdersPage.vendorDropdown().click();
    purchaseOrdersPage.getVendorSearchFilter().should('be.visible').type(vendor, { force: true });
    poActionsPage.getPoEditScreenVendorDropdownList()
    .invoke('text')
    .then((text) => {

        if (text.includes(vendor)) {
        purchaseOrdersPage.getFirstSearchedVendor().click({ force: true });
        } else {
        purchaseOrdersPage.getVendorSearchFilter().clear();
        poActionsPage.getPoEditScreenVendorDropdownList()
            .find('li')
            .eq(1)
            .click({ force: true });
        }   purchaseOrdersPage.getPageBody().click();
    });
}

export function itemSelectionInEditI1(item) {
    purchaseOrdersPage.itemDropdownI1().click();
    purchaseOrdersPage.getItemSearchFilterI1().should('be.visible').type(item, {force:true})
    poActionsPage.getPoEditScreenItemDropDownList1()
    .invoke('text')
    .then((text) => {

        if (text.includes(item)) {
            purchaseOrdersPage.getFirstSearchedItemI1().click({force:true});
        } else {
            purchaseOrdersPage.getItemSearchFilterI1().clear();
            poActionsPage.getPoEditScreenItemDropDownList1()
            .find('li')
            .eq(1)
            .click({force:true});
        }   purchaseOrdersPage.getPageBody().click();
    });
}

export function accounSelectionInEditA1(account) {
    purchaseOrdersPage.getAccountTable().click({force:true});
    purchaseOrdersPage.getAccountDropdownA1().should('be.visible').click({force:true});
    purchaseOrdersPage.getAccountSearchFilterA1().type(account, {force:true});
    poActionsPage.getPoEditScreenAccountDropdownList1()
    .invoke('text')
    .then((text) => {

        if(text.includes(account)) {
            purchaseOrdersPage.getFirstSearchedAccountA1().click({force:true});
        } else {
            purchaseOrdersPage.getAccountSearchFilterA1().clear();
            poActionsPage.getPoEditScreenAccountDropdownList1()
            .find('li')
            .eq(1)
            .click({force:true})
        }   purchaseOrdersPage.getPageBody().click();
    })
}

export function AssertNetAmountInPoEdit(tax) {
    poActionsPage.getPoEditScreenItemGrossAmount().then(($itemTotal) => {
        const itemTotal = parseFloat($itemTotal.val().replace(/,/g, ''));

                poActionsPage.getPoEditScreenAccountGrossAmount().then(($accountTotal) =>{
                    const accountTotal = parseFloat($accountTotal.val().replace(/,/g, ''));
            
                    poActionsPage.getPoEditScreenTaxCalculationAmountTick().click({force:true});
                    poActionsPage.getPoEditScreenTaxAmountOrPercentage().type(tax, {force:true})

                        poActionsPage.getPoEditScreenDiscountAmount().then(($totalDiscount) => {
                            const totalDiscount = parseFloat($totalDiscount.val().replace(/,/g, ''));

                                poActionsPage.getPoEditScreenNetAmount().then(($netAmount) => {
                                    const netAmount = parseFloat($netAmount.val().replace(/,/g, ''));

                                        poActionsPage.getPoEditScreenTaxAmountOrPercentage().then(($tax) => {
                                            const tax = parseFloat($tax.val().replace(/,/g, ''));
                                        
                                            const calculatedValue = itemTotal + accountTotal + tax - totalDiscount;
                                            expect(calculatedValue).to.equal(netAmount);
                                        })
                                })
                        })
                })

        })
}

export function approvalGroupSelectionInPoEdit(approvalGroup1) {
    poActionsPage.getPoEditApprovalGroupDropdown().click();
    poActionsPage.getPoEditApprovalGroupSearchFilter().should('be.visible').type(approvalGroup1, {force:true});
    poActionsPage.getPoEditApprovalGroupList()
    .invoke('text')
    .then((text) => {

        if(text.includes(approvalGroup1)) {
            poActionsPage.getPoEditFirstApprovalGroup().click({force:true});
        } else {
            poActionsPage.getPoEditApprovalGroupSearchFilter().clear();
            poActionsPage.getPoEditApprovalGroupList()
            .find('li')
            .eq(0)
            .click({force:true});
        } purchaseOrdersPage.getPageBody().click();
    })
}

export function clickEditScreenSaveButton() {
    poActionsPage.getPoSaveButton().click();
}

export function clickEditScreenSubmitButton() {
    poActionsPage.getPoEditSubmitButon().should('be.visible')
    poActionsPage.getPoEditSubmitButon().click();
}

export function clickDownloadReportAction() {
    getActionButton();
    poActionsPage.getDownloadReportAction().click({force:true});
    poActionsPage.getAlerttMessage200().should('contain', 'File downloaded successfully');
}

export function clickExportAction() {
    getActionButton();
    poActionsPage.getExportAction().click({force:true});
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase Order exported successfully');
}

export function clcickAuditTrail() {
    getActionButton();
    poActionsPage.getAuditTrailAction().click({force:true});
    poActionsPage.getAuditTrailSidePanelCloseIcon().click({force:true});
}

export function clickDetailViewAction() {
    getActionButton();
    poActionsPage.getDetailViewAction().click({force:true});
    poActionsPage.getDetailViewHeader().should('be.visible');
    poActionsPage.getDetailViewPdfReport().should('be.visible');
    poActionsPage.getDetailViewBinIcon().should('be.visible');
    poActionsPage.getDeatilViewEditIcon().should('be.visible');
    poActionsPage.getDetailViewCloseIcon().click();
}

export function clickUndoAction() {
    getActionButton();
    poActionsPage.getUndoAction().click({force:true});
    poActionsPage.getConfirmationPopupMessage().should('contain', 'You want to undo your last action');
    poActionsPage.getConfirmationYesButton().click({force:true});
    poActionsPage.getAlerttMessage200().should('contain', 'Your previous action on this purchase order has been reversed successfully');
}

export function clickCloseAction() {
    getActionButton();
    poActionsPage.getCloseAction().click({force:true});
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase Order closed successfully')
    .then(() => cy.wait(2000));
}

export function clickReopenAction() {
    getActionButton();
    poActionsPage.getReopenAction().click({force:true});
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase Order reopened successfully');
}

export function clickDeleteAction() {
    getActionButton();
    poActionsPage.getDeleteAction().click({force:true});
    poActionsPage.getDeleteConfirmationButton().click();
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase Order deleted successfully');
}

export function goToDraftEditScreen() {
    getActionButton();
    poActionsPage.getDraftEditAction().click({force:true})
    .then(() => cy.wait(4000));
}

export function clickSaveAsApprovedInDraftEdit() {
    poActionsPage.getDraftEditSaveAsApprovedButton().click();
}

export function clickSubmitForApprovalInDraftEdit() {
    poActionsPage.getDraftEditSubmitButton().click();
} 

export function tickFirstCheckboxInTable() {
    poActionsPage.get1stCheckboxInTable().click({force:true});
}

export function clickBulkFilterAction() {
    poActionsPage.getBulkFilterAction().should('be.visible').click();
    poActionsPage.getBulkSearchSidePanelHeader().should('contain', 'Advance Filter');
    poActionsPage.getPageBody().click();
}

export function clickBulkQuickApproveAction() {
    poActionsPage.getBulkQuickApproveAction().should('be.visible').click();
    poActionsPage.getQuickAproveConfirmationYesButton().click();
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase order approved successfully');
}

export function clickBulkRejectAction() {
    poActionsPage.getBulkRejectAction().should('be.visible').click();
    poActionsPage.getBulkRejectConfirmationYesButton().click();
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase order(s) reject successfully');
}

export function clickBulkColumns() {
    poActionsPage.getBulkColumnsAction().should('be.visible').click();
    poActionsPage.getColumnsSidebarHeader().should('contain', 'Columns');
    poActionsPage.getPageBody().click();
}

export function clickBulkCloseAction() {
    poActionsPage.getBulkCloseAction().should('be.visible').click();
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase Order(s) closed successfully')
    .then(() => cy.wait(3000));
}

export function clickBulkReopenAction() {
    poActionsPage.getBulkReopenAction().should('be.visible').click();
    poActionsPage.getAlerttMessage200().should('contain', 'Purchase Order(s) reopened successfully');
}

export function clickBulkExportAction() {
    poActionsPage.getBulkExportAction().should('be.visible').click();
    poActionsPage.getAlerttMessage200().should('contain', 'All Purchase Orders exported successfully');
}

export function clickBulkReportDownload() {
    poActionsPage.getBulkDownloadAction().should('be.visible').click();
    poActionsPage.getAlerttMessage200().should('contain', 'File downloaded successfully');
}

export function clickBulkDeleteAction() {
    poActionsPage.getBulkDeleteAction().should('be.visible').click();
    poActionsPage.getBulkDeleteConfirmationYseButton().click();
}