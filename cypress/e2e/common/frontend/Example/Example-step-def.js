
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import Example from "../../../../pages/Example/Example.spec";

const example = new Example();

Given("I visit automation exercise website", () => {
    example.visitURL();
});

Then("I verify webiste logo is visible", () => {
    example.verifyLogo();
});

Then("I verify the title of the website", () => {
    example.verifyTitle();
});

Then("I capture the screenshot of recommended items", () => {
    example.getRecommendedItemsScreenshot();
});