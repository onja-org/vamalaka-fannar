/// <reference types="cypress" />

describe("Home Screen", () => {
    beforeEach("visits site", () => {
        cy.visit("/")
    })
    it("Displays the slogan", () => {
        cy.contains("Madagascars peer-to-peer e-commerce platform")
    })
})