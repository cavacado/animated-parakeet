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
  it("will filter by year, if dropdown is selected correctly", () => {
    cy.contains("filter by year").click();
    cy.contains("2010").first().click();
    expect(cy.contains("Alice in Wonderland")).to.exist;
  });
  it("will filter by genre, if dropdown is selected correctly", () => {
    cy.contains("filter by genre").click();
    cy.contains("Action").first().click();
    expect(cy.contains("Tomorrowland")).to.exist;
  });
  it("will reset all filters, on reset filter clicked", () => {
    cy.contains("filter by year").click();
    cy.contains("2010").first().click();
    cy.contains("filter by genre").click();
    cy.contains("Action").first().click();
    cy.contains("Deadpool").should("not.be.visible");
    cy.contains("reset filters").click();
    cy.contains("Deadpool").should("be.visible");
  });
});
