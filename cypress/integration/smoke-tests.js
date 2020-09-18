/// <reference types="cypress" />

context("Smoke Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("finds the text Home", () => {
    cy.contains("Home");
  });
  it("will invoke dark mode on toggle", () => {
    cy.get("[aria-label='toggle']").parent().click();
  });
});
