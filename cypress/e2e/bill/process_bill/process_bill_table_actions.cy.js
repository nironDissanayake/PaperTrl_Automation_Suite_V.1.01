// import faker from "faker";
// import Login from "../../../pages/Login";
// import TenantOrPortal from "../../../pages/TenantOrPortal";
// import { ItemSelectionLine1, accountSelectionLine1, approvalGroupSelection, assertItemLineAmount1, billTermSelection, 
//     checkDueDate, clickApproversSelector, clickBillSubMenu, clickCreateProcessBillButton, clickSubmitForApprovalButton, tickBillableAccount1, 
//     ticktaxableAccount1, typeAmountAccount1, typeBillAmount, typeBillDate, typeBillNo, typeItemCost1, typeQtyItem1, 
//     vendorSelection } from "../../../functions/process_bill/create_process_bill";
// import { clickApproveButton, closeProcessBillPage, getAlert200, goToProcessBillApprovalPage, searchProcessBillNo, 
//     viewAuditTrail } from "../../../functions/process_bill/process_bill_table_actions";


// describe('process_bill_table_actions', () => {

//    const login = new Login();
//    const tenantOrPortal = new TenantOrPortal();

//    const vendor = "456";
//    const billNo1 = faker.finance.account();
//    const billNo2 = faker.finance.account();
//    const billNo3 = faker.finance.account();
//    const billNo4 = faker.finance.account();
//    const billNo5 = faker.finance.account();
//    const billNo6 = faker.finance.account();
//    const billNo7 = faker.finance.account();
//    const billNo8 = faker.finance.account();
//    const billNo9 = faker.finance.account();
//    const billDate = "07/10/2023";
//    const billAmount1 = 200000;
//    const amount1 = 200000;
//    const billAmount2 = 400000;
//    const account1 = "gtd";
//    const billTerm = "dct";
//    const item1 = "hgy";
//    const qty1 = 2
//    const itemCost1 = 100000;
//    const approvalUser1 = "srt";
//    const approvalGroup1 = "lki";

//     beforeEach(() => {
//         login.visitPapertrlAndLogin();
//         tenantOrPortal.checkTenantOrPortal()
//         clickBillSubMenu();
//     });

//     it.skip('01. create_&_approve_with_item_line1_&_account_line1', () => {

//         clickCreateProcessBillButton();
//         vendorSelection(vendor);
//         typeBillNo(billNo1);
//         typeBillDate(billDate);
//         typeBillAmount(billAmount2);
//         billTermSelection(billTerm);
//         checkDueDate();
//         accountSelectionLine1(account1);
//         tickBillableAccount1();
//         ticktaxableAccount1();
//         typeAmountAccount1(amount1);
//         ItemSelectionLine1(item1);
//         typeQtyItem1(qty1);
//         typeItemCost1(itemCost1);
//         assertItemLineAmount1();
//         clickApproversSelector();
//         approvalGroupSelection(approvalGroup1);
//         clickSubmitForApprovalButton();
//         closeProcessBillPage();
//         searchProcessBillNo(billNo1);
//         goToProcessBillApprovalPage();
//         viewAuditTrail();
//         clickApproveButton();
//         getAlert200().should('contain', 'Bill approved successfully');
//     });

//     it('02. edit_created_po', () => {


//     });



// });//