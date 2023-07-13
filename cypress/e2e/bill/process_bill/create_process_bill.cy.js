import { ItemSelectionLine1, accountSelectionLine1, assertItemLineAmount1, billTermSelection, checkDueDate, clickBillSubMenu, clickCreateProcessBillButton, 
         clickSaveAsApprovedButton, 
         clickSaveAsDraftButton, 
         clickSubmitForApprovalButton, 
         tickBillableAccount1, ticktaxableAccount1, typeAmountAccount1, typeBillAmount, typeBillDate, 
         typeBillNo, typeItemCost1, typeQtyItem1, validateBillHeaderRequiredFields, validateBillHeaderRequiredFieldsForDraft, vendorSelection } from "../../../functions/process_bill/create_process_bill";
import Login from "../../../pages/Login";
import TenantOrPortal from "../../../pages/TenantOrPortal";
import faker from "faker";


describe('process_bill', () => {

   const loginPage = new Login();
   const tenantOrPortal = new TenantOrPortal();

   const vendor = "456";
   const billNo = faker.finance.account();
   const billDate = "07/10/2023";
   const billAmount = 200000;
   const amount1 = 100000;
   const account1 = "gtd";
   const billTerm = "dct";
   const item1 = "hgy";
   const qty1 = 3
   const itemCost1 = 40000;



    beforeEach(() => {
        loginPage.visitPapertrlAndLogin();
        tenantOrPortal.checkTenantOrPortal();
        clickBillSubMenu();
        clickCreateProcessBillButton();
        cy.wait(5000);
    });


    it.only('process_bill_header_required_fields_validation', () => {
        
        clickSaveAsApprovedButton();
        validateBillHeaderRequiredFields();

        clickSaveAsDraftButton();
        validateBillHeaderRequiredFieldsForDraft();

        clickSubmitForApprovalButton();
        validateBillHeaderRequiredFields();
    });

    it('save_as_approved_with_account_line_1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo);
        typeBillDate(billDate);
        typeBillAmount(billAmount);
        billTermSelection(billTerm);
        checkDueDate();
        accountSelectionLine1(account1);
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
    });

    it('save_as_approved_with_item_line_1', () => {

        vendorSelection(vendor);
        typeBillNo(billNo);
        typeBillDate(billDate);
        typeBillAmount(billAmount);
        billTermSelection(billTerm);
        checkDueDate();
        ItemSelectionLine1(item1);
        typeQtyItem1(qty1);
        typeItemCost1(itemCost1);
        assertItemLineAmount1();
    });

});