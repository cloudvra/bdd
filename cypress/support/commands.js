// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("apiRequest", (method, endpoint, body = null, headers = {}) => {
    const defaultHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": Cypress.env("API_KEY") ? `Bearer ${Cypress.env("API_KEY")}` : undefined,
      ...headers
    };
  
    return cy.request({
      method: method,
      url: endpoint,
      body: body,
      headers: defaultHeaders,
      failOnStatusCode: false // Important for negative test cases
    });
  });
  
  // Helper commands
  Cypress.Commands.add("login", (credentials) => {
    return cy.apiRequest("POST", "/auth/login", credentials);
  });
  
  Cypress.Commands.add("getUser", (userId) => {
    return cy.apiRequest("GET", `/users/${userId}`);
  });