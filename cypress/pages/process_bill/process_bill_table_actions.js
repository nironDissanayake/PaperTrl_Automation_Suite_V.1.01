
class ProcessBillActions {

    getBillNumberSearchFilter() {
        return cy.get(':nth-child(2) > span > [style="max-width: 150px;"] > .p-fluid > .p-inputtext', {timeout:5000});
    }

    getBillActionButton() {
        return cy.get('button.p-element.grid-action-btn')
       .eq(0);
    }

    getApproveOrRejectAction() {
        return cy.get('.p-menuitem-text').contains('Approve or Reject');
     }

    getApprovePageHeader() {
        return cy.get('.module-header-label');
    } 

    getApproveButton() {
        return cy.contains('button', 'Approve');
    }

    getRejectButton() {
        return cy.contains('button', 'Reject');
    }

    getViewAuditTrailButton() {
        return cy.contains('button', 'View Audit Trail');
    }

    getApproveScreenAuditTrailHeader() {
        return cy.get('.p-sidebar-lg > .p-sidebar-header', {timeout:5000});
    }

    getAuditTrailCloseIcon() {
        return cy.get('.p-sidebar-close-icon');
    }

    getProcessBillPageCloseIcon() {
        return cy.xpath("//div[@class='fa fa-close side-drawer-icon']");
    }

    getAlertMessage207() {
        return cy.get('div[role="alert"].p-toast-message-content', {timeout:10000});
    }

    getAlerttMessage200() {
        return cy.get('div[role="alert"]', {timeout:10000});
    }
}

export default ProcessBillActions;