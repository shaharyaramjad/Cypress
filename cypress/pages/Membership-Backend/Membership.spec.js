
class API {

    /**
     * This method will send the request and save the result as test
     */
    sendRequest() {
        cy.request(Cypress.env("api_url")).as('comments');
    }

    /**
     * This method will verify the response code
     * @param {200} responseCode response code to be verified
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
            expect(response.body).to.have.length.greaterThan(500);
        });
    }

    printMemberNumberfromResponse(){
        cy.get('@comments').then((response) => {
            cy.log(response.body.response.memberNumber);
        })
    }
    printResponse(){
        cy.get('@comments').then((response) => {
            cy.log(JSON.stringify(response.body));
        })
    }
} export default API;