
class API {

    /**
     * This method will send the request and save the result as test
     */
    sendRequest() {
        cy.request(Cypress.env("api_url")).as('comments');
    }

    /**
     * This method will verify the response code
     * @param {number} responseCode response code to be verified
     */
    verifyResponseCode(responseCode) {
        cy.get('@comments').should((response) => {
            expect(response.status).to.eq(responseCode);
        });
    }

    /**
     * This method will verify the response code
     */
    verifyResponseLength() {
        cy.get('@comments').should((response) => {
            expect(response.body).to.have.length(500);
        });
    }

} export default API;