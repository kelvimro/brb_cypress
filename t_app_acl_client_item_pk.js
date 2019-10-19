describe('Client add details', function () {
    before(function () {
        cy.clearCookie('BRBOSCookie')
    })

    it('login', () => {
        cy.login();
        cy.visit('/s/app_acl_client_item/9');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Check disabled buttons', () => {
        // Save buton
        cy.get('[id="button-1208"]')
            .should('not.have.class', 'x-disabled');
        // New Address button
        // cy.get('a[id="button-1208"]')
        //     .should('have.class', 'x-disabled');
        // New Phone button
        cy.get('[id="button-1178"]')
            .should('have.class', 'x-disabled');
        
        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Add Address', () => {
        cy.get('[id="button-1208"]')
        .click()
        .wait(300)
        .get('[id="app_addresses_form_0"]')
        .should('be.visible');
        cy.get('[id="button-1255"]')
        .should('have.class', 'x-disabled');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Address fill', () => {
        cy.get('input[id="textfield-1240-inputEl"]')
        .type('CasaX')
        cy.get('input[id="address_zipcodeapp_addresses_form_0-inputEl"]')
        .type('79051-650')
        cy.get('[id="textarea-1246-inputEl"]')
        .click()
        .wait(300);
        cy.get('input[name="address_number"]')
        .type('236');
        cy.get('input[id="checkbox-1244-inputEl"]')
        .click();

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Check button enable, save and check notification', () => {
        cy.get('[id="button-1255"]')
        .should('not.have.class', 'x-disabled')
        .click({ force: true })
        .then(() => {
            cy.get('ul[id="brb-noty-tr"]').should('be.visible');
        });
        
        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });
})