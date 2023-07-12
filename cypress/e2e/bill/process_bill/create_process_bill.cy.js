import { billTermSelection, checkDueDate, clickBillSubMenu, clickCreateProcessBillButton, tickBillableAccount1, ticktaxableAccount1, typeAmountAccount1, typeBillAmount, typeBillDate, typeBillNo, vendorSelection } from "../../../functions/process_bill/create_process_bill";
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
   const accountAmount1 = 100000;
   const cost = 2000;


    beforeEach(() => {
        loginPage.visitPapertrlAndLogin();
        tenantOrPortal.checkTenantOrPortal();
        clickBillSubMenu();
        clickCreateProcessBillButton();
        cy.wait(5000);
    });

    it('process_bill_header_required_fields_validation', () => {
        
        vendorSelection(vendor);
        typeBillNo(billNo);
        typeBillDate(billDate);
        typeBillAmount(billAmount);
        billTermSelection();
        checkDueDate();
        tickBillableAccount1();
        ticktaxableAccount1();
        typeAmountAccount1(amount1);
        

    });

});