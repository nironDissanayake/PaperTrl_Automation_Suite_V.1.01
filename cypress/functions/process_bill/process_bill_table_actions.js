import ProcessBillActions from "../../pages/process_bill/process_bill_table_actions";

const processBillActionPage = new ProcessBillActions();

export function closeProcessBillPage() {
    processBillActionPage.getProcessBillPageCloseIcon().click();
}

export function searchProcessBillNo(billNo) {
    processBillActionPage.getBillNumberSearchFilter().type(billNo);
}

export function clickBillActionIcon() {
    cy.wait(3000)
    .then(() => {processBillActionPage.getBillActionButton().click({force:true})});
}

export function goToProcessBillApprovalPage() {
    clickBillActionIcon();
    processBillActionPage.getApproveOrRejectAction().click({force:true});
    processBillActionPage.getApprovePageHeader().should('contain', 'Bill Details');
}

export function viewAuditTrail() {
    processBillActionPage.getViewAuditTrailButton().click();
    processBillActionPage.getApproveScreenAuditTrailHeader().should('contain', 'Audit Trail');
    processBillActionPage.getAuditTrailCloseIcon().click();
}

export function clickApproveButton() {
    processBillActionPage.getApproveButton().click();
}

export function getAlert207() {  
    return processBillActionPage.getAlertMessage207();
}

export function getAlert200() {
    return processBillActionPage.getAlerttMessage200();
}