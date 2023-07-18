import { ItemSelectionLine1, accountSelectionLine1, approvalGroupSelection, approvalUserSelection1, assertItemLineAmount1, 
    billTermSelection, checkDueDate, clickApproversSelector, clickBillSubMenu, clickCreateProcessBillButton, 
         clickSaveAsApprovedButton, 
         clickSaveAsDraftButton, 
         clickSubmitForApprovalButton, 
         getAlert200, 
         tickBillableAccount1, ticktaxableAccount1, typeAmountAccount1, typeBillAmount, typeBillDate, 
         typeBillNo, typeItemCost1, typeQtyItem1, validateBillHeaderRequiredFields, validateBillHeaderRequiredFieldsForDraft, 
         vendorSelection } from "../../../functions/process_bill/create_process_bill";
import Login from "../../../pages/Login";
import TenantOrPortal from "../../../pages/TenantOrPortal";
import faker from "faker";


describe('process_bill', () => {

   const loginPage = new Login();
   const tenantOrPortal = new TenantOrPortal();

   const vendor = "456";
   const billNo1 = faker.finance.account();
   const billNo2 = faker.finance.account();
   const billNo3 = faker.finance.account();
   const billNo4 = faker.finance.account();
   const billNo5 = faker.finance.account();
   const billNo6 = faker.finance.account();
   const billNo7 = faker.finance.account();
   const billNo8 = faker.finance.account();
   const billNo9 = faker.finance.account();
   const billDate = "07/10/2023";
   const billAmount1 = 200000;
   const amount1 = 200000;
   const billAmount2 = 400000;
   const account1 = "gtd";
   const billTerm = "dct";
   const item1 = "hgy";
   const qty1 = 2
   const itemCost1 = 100000;
   const approvalUser1 = "srt";
   const approvalGroup1 = "lki";



    beforeEach(() => {
        loginPage.visitPapertrlAndLogin();
        tenantOrPortal.checkTenantOrPortal();
        clickBillSubMenu();
        clickCreateProcessBillButton();
    });


    it('process_bill_header_required_fields_validation', () => {
        
        clickSaveAsApprovedButton();
        validateBillHeaderRequiredFields();

        clickSaveAsDraftButton();
        validateBillHeaderRequiredFieldsForDraft();

        clickSubmitForApprovalButton();
        validateBillHeaderRequiredFields();
    });

    it.only('save_as_approved_with_account_line_1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo1);
        typeBillDate(billDate);
        typeBillAmount(billAmount1);
        billTermSelection(billTerm);
        checkDueDate();
        accountSelectionLine1(account1);
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
        clickSaveAsApprovedButton();
        getAlert200().should('contain', 'Bill successfully save as approved');
    });

    it('save_as_approved_with_item_line_1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo2);
        typeBillDate(billDate);
        typeBillAmount(billAmount1);
        billTermSelection(billTerm);
        checkDueDate();
        ItemSelectionLine1(item1);
        typeQtyItem1(qty1);
        typeItemCost1(itemCost1);
        assertItemLineAmount1();
        clickSaveAsApprovedButton();
        getAlert200().should('contain', 'Bill successfully save as approved');
    });

    it('save_as_approved_with_item_line1_&_account_line1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo3);
        typeBillDate(billDate);
        typeBillAmount(billAmount2);
        billTermSelection(billTerm);
        checkDueDate();
        accountSelectionLine1(account1);
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
        ItemSelectionLine1(item1);
        typeQtyItem1(qty1);
        typeItemCost1(itemCost1);
        assertItemLineAmount1();
        clickSaveAsApprovedButton();
        getAlert200().should('contain', 'Bill successfully save as approved');
    });
    
    it('save_as_draft_with_account_line1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo4);
        typeBillDate(billDate);
        typeBillAmount(billAmount1);
        billTermSelection(billTerm);
        checkDueDate();
        accountSelectionLine1(account1);
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft updated successfully');
        clickSaveAsApprovedButton();
    });

    it('save_as_draft_with_item_line_1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo5);
        typeBillDate(billDate);
        typeBillAmount(billAmount1);
        billTermSelection(billTerm);
        checkDueDate();
        ItemSelectionLine1(item1);
        typeQtyItem1(qty1);
        typeItemCost1(itemCost1);
        assertItemLineAmount1();
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft updated successfully');
        clickSaveAsApprovedButton();
    });

    it('save_as_draft_with_item_line1_&_account_line1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo6);
        typeBillDate(billDate);
        typeBillAmount(billAmount2);
        billTermSelection(billTerm);
        checkDueDate();
        accountSelectionLine1(account1);
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
        ItemSelectionLine1(item1);
        typeQtyItem1(qty1);
        typeItemCost1(itemCost1);
        assertItemLineAmount1();
        clickSaveAsDraftButton();
        getAlert200().should('contain', 'Draft updated successfully');
        clickSaveAsApprovedButton();
    });

    it('submit_for_approval_with_account_line1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo7);
        typeBillDate(billDate);
        typeBillAmount(billAmount1);
        billTermSelection(billTerm);
        checkDueDate();
        accountSelectionLine1(account1);
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
        clickApproversSelector();
        approvalUserSelection1(approvalUser1);
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Successfully submitted for approval');
    });

    it('submit_for_approval_with_item_line1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo8);
        typeBillDate(billDate);
        typeBillAmount(billAmount1);
        billTermSelection(billTerm);
        checkDueDate();
        ItemSelectionLine1(item1);
        typeQtyItem1(qty1);
        typeItemCost1(itemCost1);
        assertItemLineAmount1();
        clickApproversSelector();
        approvalGroupSelection();
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Successfully submitted for approval');
    });

    it('submit_for_approva_with_item_line1_&_account_line1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo9);
        typeBillDate(billDate);
        typeBillAmount(billAmount2);
        billTermSelection(billTerm);
        checkDueDate();
        accountSelectionLine1(account1);
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
        ItemSelectionLine1(item1);
        typeQtyItem1(qty1);
        typeItemCost1(itemCost1);
        assertItemLineAmount1();
        clickApproversSelector();
        approvalGroupSelection();
        clickSubmitForApprovalButton();
        getAlert200().should('contain', 'Successfully submitted for approval');
    });

});