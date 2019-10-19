describe('app_client_item screen', function () {
    before(function () {
        cy.clearCookie('BRBOSCookie')
    })

    it('login', () => {
        cy.login();
        cy.visit('/s/app_acl_client_item/');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Check disabled buttons', () => {
        // Save buton
        cy.get('[id="button-1238"]')
            .should('have.class', 'x-disabled');
        // New Address button
        // cy.get('a[id="button-1208"]')
        //     .should('have.class', 'x-disabled');
        // New Phone button
        cy.get('[id="button-1178"]')
            .should('have.class', 'x-disabled');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Office combo required', () => {
        cy.get('input[id="app_acl_client_item_offices_combo-inputEl"]')
            .should('have.class', 'x-form-required-field')
            .should('have.attr', 'aria-invalid', 'false')
            .click({ force: true })
            .wait(500)
            .get('[id="boundlist-1240-listEl"] > ul > li')
            .contains('Matriz')
            .click();
        cy.wait(500);

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Client type PF e PJ', () => {
        cy.get('input[id="app_acl_client_itemclient_type-inputEl"]')
            .click({ force: true })
            .wait(500)
            .get('[id="boundlist-1253-listEl"] > ul > li')
            .should('have.length', 2);

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Client status', () => {
        cy.get('input[id="app_acl_client_itemclient_status-inputEl"]')
            .click({ force: true })
            .wait(500)
            .get('[id="boundlist-1254-listEl"] > ul > li')
            // Check if have 4 status
            .should('have.length', 4);

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Input name required', () => {
        cy.get('input[name="client_name"]')
            .should('have.class', 'x-form-required-field')
            .should('have.attr', 'aria-invalid', 'false')
            .type('Kelvim');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Input last name required', () => {
        cy.get('input[name="client_lastname"]')
            .should('have.class', 'x-form-required-field')
            .should('have.attr', 'aria-invalid', 'false')
            .type('Oliveira');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Born date picker', () => {
        cy.get('div[id="ext-gen1378"]')
            .click()
            .wait(500)
        cy.get('[id="datepicker-1255"]').should('be.visible');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('CPF', () => {
        cy.get('input[name="_client_doc1"]')
            .type('75193436005')
            .wait(500);

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('RG', () => {
        cy.get('input[name="client_doc2"]')
            .type('1578964')
            .wait(500);

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('E-mail without @', () => {
        cy.get('input[name="client_mail"]')
            .type('testesemarroba')
            .get('#button-1238-btnInnerEl')
            .click()
            .wait(500)
            .get('#messagebox-1001-toolbar')
            .should('be.visible')
            .then(() => {
                cy.contains('OK')
                    .click()
                    .wait(500);
            });

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('E-mail and with @', () => {
        cy.get('input[name="client_mail"]')
            .clear()
            .type('teste@')
            .wait(500)
            .get('#button-1238-btnInnerEl')
            .click()
            .get('#messagebox-1001-toolbar')
            .should('be.visible')
            .then(() => {
                cy.contains('OK')
                    .click();
            });

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('E-mail top domain - valid', () => {
        cy.get('input[name="client_mail"]')
            .clear()
            .type('teste@semcombr');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

    it('Cadastre date picker', () => {
        cy.get('div[id="ext-gen1380"]')
            .click()
        cy.get('div[id="datepicker-1259"]').should('be.visible');

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });


    it('Client\'s painel', () => {
        cy.get('input[name="client_username"]')
            .type('321');
        cy.get('input[name="client_password"]')
            .type('321');
        cy.get('input[name="client_password1"]')
            .type('321');

        cy.contains('Salvar')
            .click({ force: true })
            .then(() => {
                cy.get('ul[id="brb-noty-tr"]').should('be.visible');
            });

        Cypress.Cookies.preserveOnce('BRBOSCookie');
    });

})
