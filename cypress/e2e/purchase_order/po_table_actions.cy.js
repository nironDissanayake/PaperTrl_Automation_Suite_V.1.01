import Login from "../../pages/Login"
import TenantOrPortal from "../../pages/TenantOrPortal";
import PurchaseOrders from "../../pages/purchase_order/Create_po";
import faker from "faker";
import {departmentSelection, vendorSelection, submitDateSelection, deleveryDateSelection, 
        itemSelectionI1, departmentSelectionI1, typeQty1, typeCost, typeDiscount, assertItemLineAmount, 
        accounSelection1, departmentSelectionA1, AssertNetAmountWithTaxAmount, approvalGroupSelection1, 
        approvalUserSelection1, approvalGroupSelection2, approvalUserSelection2, typeAmountA1, getAlert207, getAlert200, 
        closeAlertMessage207, clickSaveAsApprovedButton, clickSaveAsDraftButton, clickSubmitForApprovalButton, clickResetButton, 
        validateHeaderRequiredFields, clickPoSubmenu, clickCreatePoButton, clickapprovalLinePlusIcon} from "../../functions/purchase_order/create_po";

import {searchCreatedPO, goToPoApprovalScreen, goToPoAuditTrail, clickOnApproveButton, typePoNumber, clickApprovalScreenCloseButton, 
        goToEditScreen, clickEditScreenSaveButton, vendorSelectionInEdit, itemSelectionInEditI1, 
        accounSelectionInEditA1, AssertNetAmountInPoEdit, approvalGroupSelectionInPoEdit, clickEditScreenSubmitButton,
        clickDownloadReportAction, clickExportAction, clcickAuditTrail, clickDetailViewAction, clickUndoAction, clickCloseAction,
        clickReopenAction, typeRejectComment, clickRejectButton, goToPoEditAndResubmitScreen, clickResubmitButton, goToDraftEditScreen, 
        clickSaveAsApprovedInDraftEdit, clickSubmitForApprovalInDraftEdit, tickFirstCheckboxInTable, clickBulkQuickApproveAction, clickBulkRejectAction, 
        clickBulkCloseAction, clickBulkReopenAction, clickBulkFilterAction, clickBulkColumns, clickBulkExportAction, clickBulkReportDownload, 
        clickBulkDeleteAction, clickDeleteAction} from "../../functions/purchase_order/po_table_actions";


describe('po_table_actions', () => {

    const loginPage = new Login();
    const tenantOrPortal = new TenantOrPortal();
    const purchaseOrdersPage = new PurchaseOrders();

    const purchaseOrders = "Purchase Orders";
    const poNumber0 = faker.finance.account();;
    const poNumber1 = faker.finance.account();;
    const poNumber2 = faker.finance.account();;
    const poNumber3 = faker.finance.account();;
    const poNumber4 = faker.finance.account();;
    const poNumber5 = faker.finance.account();;
    const poNumber6 = faker.finance.account();;
    const poNumber7 = faker.finance.account();;
    const rejectComment = faker.lorem.sentence();
    const vendor1 = "ABC Network";
    const vendor2 = "Alien";    
    const department = "B";
    const item = "df";
    const cost = 2000;
    const qty = 4;
    const account = "wd";
    const amount = 1000;
    const discount = 20;
    const tax = 1000;
    const approvalGroup1 = "A";
    const approvalUser1 = "s";

    beforeEach(() => { 
        loginPage.visitPapertrlAndLogin();
        tenantOrPortal.checkTenantOrPortal(); 
        clickPoSubmenu(purchaseOrders);
    })

    it('01. create_&_approve_with_item_line1_&_account_line1', () => {

        clickCreatePoButton();
        typePoNumber(poNumber0);
        vendorSelection(vendor1);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        accounSelection1(account);
        //departmentSelectionA1(department);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax);
        approvalGroupSelection1(approvalGroup1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
        searchCreatedPO(poNumber0);
        goToPoApprovalScreen();
        goToPoAuditTrail();
        clickOnApproveButton();
        getAlert200().should('contain', 'Purchase Order approved successfully');
    });

    it('02. edit_created_po', () => {

        searchCreatedPO(poNumber0);
        goToEditScreen();
        vendorSelectionInEdit(vendor2);
        itemSelectionInEditI1(item);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        accounSelectionInEditA1(account);
        AssertNetAmountInPoEdit(tax);
        clickEditScreenSaveButton();
        getAlert200().should('contain', 'Purchase Order updated successfully');
    });

    it('03. check_duplicate_po', () => {

        clickCreatePoButton()
        typePoNumber(poNumber0);
        vendorSelection(vendor1);
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax);
        approvalUserSelection1(approvalUser1);
        clickSubmitForApprovalButton();
        getAlert207().should('contain', 'A purchase order with the same purchase order number is already exist');
        clickSaveAsApprovedButton();
        getAlert207().should('contain', 'A purchase order with the same purchase order number is already exist');
    });

    it('04. create _&_approve_with_item_line1', () => {

        clickCreatePoButton()
        typePoNumber(poNumber6);
        vendorSelection(vendor1);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        AssertNetAmountWithTaxAmount(tax);
        approvalGroupSelection1(approvalGroup1);
        clickapprovalLinePlusIcon();
        approvalUserSelection2(approvalUser1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
        searchCreatedPO(poNumber6);
        goToPoApprovalScreen();
        clickOnApproveButton();
        getAlert200().should('contain', 'Purchase Order approved successfully');
    });

    it('05. create_&_approve_with_account_line1', () => {

        clickCreatePoButton()
        typePoNumber(poNumber7);
        vendorSelection(vendor1);
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax);
        approvalUserSelection1(approvalUser1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
        searchCreatedPO(poNumber7);
        goToPoApprovalScreen();
        clickOnApproveButton();
        getAlert200().should('contain', 'Purchase Order approved successfully');
    });

    it('06. create_&_reject_&_resubmit_with_item_line1_account_line1', () => {

        clickCreatePoButton();
        typePoNumber(poNumber1);
        vendorSelection(vendor1);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax);
        approvalGroupSelection1(approvalGroup1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
        searchCreatedPO(poNumber1);
        goToPoApprovalScreen();
        typeRejectComment(rejectComment);
        clickRejectButton();
        getAlert200().should('contain', 'Purchase Order rejected successfully');
        searchCreatedPO(poNumber1);
        goToPoEditAndResubmitScreen();
        clickResubmitButton();
        getAlert200().should('contain', 'Purchase Order updated successfully');    
    });

    it('07. create_&_reject_&_resubmit__with_item_line1', () => {
        
        clickCreatePoButton();
        typePoNumber(poNumber2);
        vendorSelection(vendor1);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        AssertNetAmountWithTaxAmount(tax);
        approvalUserSelection1(approvalUser1);
        clickapprovalLinePlusIcon();
        approvalGroupSelection2(approvalGroup1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
        searchCreatedPO(poNumber2);
        goToPoApprovalScreen();
        typeRejectComment(rejectComment);
        clickRejectButton();
        getAlert200().should('contain', 'Purchase Order rejected successfully');
        searchCreatedPO(poNumber2);
        goToPoEditAndResubmitScreen();
        clickResubmitButton();
        getAlert200().should('contain', 'Purchase Order updated successfully');   
    });

    it('08. create_&_reject_&_resubmit__with_account_line1', () => {

        clickCreatePoButton();
        typePoNumber(poNumber3);
        vendorSelection(vendor1);
        accounSelection1(account);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax);
        approvalGroupSelection1(approvalGroup1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
        searchCreatedPO(poNumber3);
        goToPoApprovalScreen();
        typeRejectComment(rejectComment);
        clickRejectButton();
        getAlert200().should('contain', 'Purchase Order rejected successfully');
        searchCreatedPO(poNumber3);
        goToPoEditAndResubmitScreen();
        clickResubmitButton();
        getAlert200().should('contain', 'Purchase Order updated successfully');
    });

    it.only('09. create_draft_&_save_as_approved_with_item_line1', () => {

        clickCreatePoButton();
        typePoNumber(poNumber4);
        vendorSelection(vendor1);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        AssertNetAmountWithTaxAmount(tax);
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft saved successfully');
        searchCreatedPO(poNumber4);
        goToDraftEditScreen();
        clickSaveAsApprovedInDraftEdit();
        getAlert200().should('contain', 'Purchase Order successfully save as approved');
        searchCreatedPO(poNumber4);
        clickDeleteAction();
    });

    it.only('10. create_draft_&_submit_for_approval_with_account_line1', () => {

        clickCreatePoButton();
        typePoNumber(poNumber5);
        vendorSelection(vendor1);
        accounSelection1(account);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax);
        approvalGroupSelection1(approvalGroup1);
        clickapprovalLinePlusIcon();
        approvalUserSelection2(approvalUser1);
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft saved successfully');
        searchCreatedPO(poNumber5);
        goToDraftEditScreen();
        clickSubmitForApprovalInDraftEdit();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
    });

    it('11. Actions - download_report, export, audit_train, detail_view, undo, close, reopen', () => {
        
        searchCreatedPO(poNumber0);
        clickDownloadReportAction();
        clickUndoAction();
        clcickAuditTrail();
        clickExportAction();
        clickDetailViewAction();
        clickCloseAction();
        clickReopenAction();
    });

    it('12. Bulk Actions - approve, reject, close, reopen, export, download, delete, columns, search', () => {

        clickBulkColumns()
        clickBulkFilterAction();
        searchCreatedPO(poNumber5);
        tickFirstCheckboxInTable();
        clickBulkQuickApproveAction();
        tickFirstCheckboxInTable();
        clickBulkRejectAction();
        clickUndoAction();
        tickFirstCheckboxInTable();
        clickBulkQuickApproveAction();
        cy.wait(2000);
        tickFirstCheckboxInTable();
        clickBulkCloseAction();
        tickFirstCheckboxInTable();
        clickBulkReopenAction();
        clickBulkExportAction();
        clickBulkReportDownload();
        tickFirstCheckboxInTable();
        clickBulkDeleteAction();
    });



});