/// <reference types="cypress" />

// Header nav link
describe("Header NavLink Storybook", () => {
  beforeEach("visits a header link", () => {
    cy.visit("http://localhost:6006/?path=/story/header-navlink--logged-in");
  });
  it("should have an ul tag", () => {
    cy.get("a").should("have.attr", "href");
  });
  it("should have English as a text", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=header-navlink--logged-in&viewMode=story#language"
    );
    cy.contains("English", { timeout: 1000 });
  });
});
