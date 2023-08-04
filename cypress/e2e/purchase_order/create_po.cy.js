import Login from "../../pages/Login"
import TenantOrPortal from "../../pages/TenantOrPortal";
import PurchaseOrders from "../../pages/purchase_order/Create_po";
import faker from "faker";
import {departmentSelection, vendorSelection, submitDateSelection, deleveryDateSelection, 
        itemSelectionI1, departmentSelectionI1, typeQty1, typeCost, typeDiscount, assertItemLineAmount, 
        accounSelection1, departmentSelectionA1, AssertNetAmountWithTaxAmount, approvalGroupSelection1, 
        approvalUserSelection1, typeAmountA1, getAlert207, getAlert200, closeAlertMessage207, clickSaveAsApprovedButton, 
        clickSaveAsDraftButton, clickSubmitForApprovalButton, clickResetButton, validateHeaderRequiredFields, clickPoSubmenu,
        clickCreatePoButton, typePONumber} from "../../functions/purchase_order/create_po";

describe('purchase_order', () => {
    
    const loginPage = new Login();
    const tenantOrPortal = new TenantOrPortal();
    const purchaseOrdersPage = new PurchaseOrders();

    const poNo = faker.finance.account();
    const po = "Purchase Orders"; 
    const vendor = "ABC Network";    
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
        clickPoSubmenu(po);
        clickCreatePoButton();
    })

    it('01. PO_header_required_fields_validation', () => {

        clickSaveAsApprovedButton();
        validateHeaderRequiredFields();

        clickSaveAsDraftButton();
        validateHeaderRequiredFields();

        clickSubmitForApprovalButton();
        validateHeaderRequiredFields();
    })

    it('02. save_as_approved_with_item_line_1', () => {
        
        departmentSelection(department);
        vendorSelection(vendor);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        clickSaveAsApprovedButton();
        getAlert200().should('contain', 'Purchase Order successfully save as approved');
    })

    it('03. save_as_approved_with_account_line_1', () => {

        departmentSelection(department);
        vendorSelection(vendor);
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        clickSaveAsApprovedButton();
        getAlert200().should('contain', 'Purchase Order successfully save as approved');
    })

    it('04. save_as_approved_with_item_line1_&_account_line1', () => {

        departmentSelection(department);
        vendorSelection(vendor);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax)
        clickSaveAsApprovedButton();
        getAlert200().should('contain', 'Purchase Order successfully save as approved');
    })    

    it('05. save_as_draft_with_item_line_1', () => {

        departmentSelection(department);
        vendorSelection(vendor);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft saved successfully');
    })

    it('06. save_as_draft_with_account_line1', () => {

        departmentSelection(department);
        vendorSelection(vendor);
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft saved successfully');
    })

    it('07. save_as_draft_with_item_line1_&_account_line1', () => {

        departmentSelection(department);
        vendorSelection(vendor);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft saved successfully');
    })

    it('08. submit_for_approval_with_item_line1', () => {
        
        departmentSelection(department);
        vendorSelection(vendor);
        itemSelectionI1(item);
        departmentSelectionI1(department);
        typeQty1(qty);
        typeCost(cost);
        typeDiscount(discount);
        assertItemLineAmount();
        AssertNetAmountWithTaxAmount(tax);
        approvalGroupSelection1(approvalGroup1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
    })

    it('09. submit_for_approval_with_account_line1', ()=> {
        
        departmentSelection(department);
        vendorSelection(vendor);
        accounSelection1(account);
        departmentSelectionA1(department);
        typeAmountA1(amount);
        AssertNetAmountWithTaxAmount(tax);
        approvalUserSelection1(approvalUser1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
    })

    it('10. submit_for_approva_with_item_line1_&_account_line1', () => {

        departmentSelection(department);
        vendorSelection(vendor);
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
        clickSubmitForApprovalButton();
        getAlert207().should('contain', 'Please select at least one approver');
        closeAlertMessage207();
        approvalGroupSelection1(approvalGroup1);
        approvalUserSelection1(approvalUser1)
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Purchase Order successfully submitted for approval');
    })



})