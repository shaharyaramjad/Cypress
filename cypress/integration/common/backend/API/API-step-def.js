
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import API from "../../../../pages/API/API.spec";

const api = new API();

Given("I send request to API", () => {
    api.sendRequest();
});

Then("I verify response code is {int}", (responseCode) => {
    api.verifyResponseCode(responseCode);
});

Then("I verify response length is 500", () => {
    api.verifyResponseLength();
});