/// <reference types="cypress" />

context("Smoke Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("finds the title", () => {
    cy.contains("Animated Parakeet");
  });
  it("will invoke dark mode on toggle", () => {
    cy.get("[aria-label='toggle']").parent().click();
  });
  it("will navigate into details on click of a section", () => {
    cy.contains("Deadpool").click();
    expect(cy.get("[data-testid=arrow-left]")).to.exist;
  });
  it("will navigate back to home on click of arrow left", () => {
    cy.contains("Deadpool").click();
    expect(cy.get("[data-testid=arrow-left]")).to.exist;
    cy.get("[data-testid=arrow-left]").click();
    expect(cy.contains("Animated Parakeet")).to.exist;
  });
});
