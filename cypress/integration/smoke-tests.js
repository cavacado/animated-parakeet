/// <reference types="cypress" />

context("Smoke Tests", () => {
  console.log(Cypress.config());
  beforeEach(() => {
    cy.visit("/");
  });
  it("finds the text Learn React", () => {
    cy.contains("Learn React");
  });
});
