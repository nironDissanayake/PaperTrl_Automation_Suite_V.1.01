
class TenantOrPortal {

    checkTenantOrPortal() {
        const name = "n";

        cy.get('.p-menuitem-text').then(($portal) => {
            if($portal.text().includes("Portal")) {

                cy.get('#subAccounts > .p-dropdown > .p-dropdown-trigger').click()
                cy.get('.p-dropdown-filter').should('be.visible').type(name, {force:true})
                cy.get('#pr_id_17_list')
                .invoke('text')
                .then((text) => {
                    
                    if (text === name) {
                        cy.get(':nth-child(1) > .p-ripple > .ng-star-inserted').click({force:true});
                    } else {
                        cy.get('.p-dropdown-filter').clear().then(() => cy.wait(1000));
                        cy.get('#pr_id_17_list').click({force:true})
                        .find('li')
                        .eq(0)
                        .click({force:true});
                    }
                })           
            }
        })
    }
}
export default TenantOrPortal;
