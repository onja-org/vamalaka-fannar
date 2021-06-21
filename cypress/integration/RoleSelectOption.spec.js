/// <reference types="cypress" />

describe("Storybook Components", () => {
  beforeEach("visits option story", () => {
    cy.visit("http://localhost:6006");
    cy.contains("Option", { timeout: 20000 });
  });

  it("Has the buyer option component", () => {
    cy.contains("Option");
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-role-select-option--buyer&args=&viewMode=story"
    );
    cy.get("div").find("img").should("have.attr", "src");
    cy.get("div").find("h6");
    cy.get("div").find("p");
    cy.get("div").find("button");
  });

  it("Has the seller option component", () => {
    cy.contains("Option");
    cy.visit(
      "http://localhost:6006/iframe.html?id=components-role-select-option--seller&args=&viewMode=story"
    );
    cy.get("div").find("img").should("have.attr", "src");
    cy.get("div").find("h6");
    cy.get("div").find("p");
    cy.get("div").find("button");
  });
});
