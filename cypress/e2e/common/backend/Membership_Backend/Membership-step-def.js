
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import API from "../../../../pages/Membership-Backend/Membership.spec";

const api = new API


Given("I send request to NS API", () => {
    api.sendRequest();
});

Then("I verify NS response code is {int}", (responseCode) => {
    api.verifyResponseCode(responseCode);
});

Then("I verify response length of NS API is 500", () => {
    api.verifyResponseLength();
});

Then("I verify response body", ()=>{
    api.printResponse();
});
Then("I verify Member Number From response", ()=>{
    api.printMemberNumberfromResponse();
});