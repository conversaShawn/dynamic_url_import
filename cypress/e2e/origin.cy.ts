Cypress._.times(10, k => {
    it.only('Cross origin error when visiting MS hosted login page', () => {
        // Start login process from our app, redirects to b2clogin.com
        cy.visit('https://app.squaredup.com')
            .origin('https://b2clogin.com/squaredupauthdev.onmimicrosoft.com', () => {
                cy.get('#AzureADExchange').click();
            });

        const sentArgs = {
            username: Cypress.env('AAD_USER_ONE_ORG'),
            password: Cypress.env('AAD_PASSWORD_ONE_ORG'),
            clickAadTile: false,
            clickDontRemainSignedIn: true
        };

        // Enter credentials on MS login pages
        cy.origin(
            'https://login.microsoftonline.com',
            { args: sentArgs },
            ({
                username,
                password,
                clickAadTile,
                clickDontRemainSignedIn
            }: {
                username: string;
                password: string;
                clickAadTile?: boolean;
                clickDontRemainSignedIn?: boolean;
            }) => {
                cy.get('input[type="email"]').should('be.visible').type(username);
                cy.get('input[type=submit]').should('be.visible').click();

                if (clickAadTile) {
                    cy.get('#aadTile').should('be.visible').click();
                }

                cy.get('input[type="password"]').should('be.visible').type(password);
                cy.get('input[type=submit]').should('be.visible').click();

                if (clickDontRemainSignedIn) {
                    cy.get('input[value="No"]').should('be.visible').click();
                }
            }
        );
    });
});