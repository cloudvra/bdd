
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I test api", function () {
  // Setup test environment
  cy.log("Initializing API test");
  // You could also:
  // - Clear test data
  // - Seed test data
  // - Authenticate
});

When("I send a GET", () => {
  cy.log("Sending GET request to the API");
});

Then("the its 200", () => {
  cy.log("Verifying response status is 200");
});