
class Example {
    /**
     * This method will visit the url
     */
    visitURL() {
        cy.visit(Cypress.env("url"));
    }

    /**
     * This method will verify that logo is visible
     */
    verifyLogo() {
        cy.readFile('cypress/pages/Example/Example-loc.json').then((locator) => {
            cy.get(locator.logo).should('be.visible');
            //cy.xpath(locator.logoXpath).should('be.visible');
        });
    }

    /**
     * This method will verify the title with expected title
     */
    verifyTitle() {
        cy.readFile('cypress/data-files/Example/Example.json').then((dataFile) => {
            cy.title().should('eq', dataFile.title);
        });
    }

    /**
     * This method will capture the screenshot of recommended items
     */
    getRecommendedItemsScreenshot() {
        cy.get('.recommended_items').screenshot();
    }
} export default Example;