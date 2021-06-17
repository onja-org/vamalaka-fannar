/// <reference types="cypress" />

describe("Header Of Offer", () => {
    beforeEach("visits header component", () => {
        cy.visit("http://localhost:6006")
        cy.contains("HeaderOfOffer", { timeout: 20000 })

    })
    it("Has the header component", () => {
        cy.contains("HeaderOfOffer")
        cy.visit("http://localhost:6006/iframe.html?id=offer-headerofoffer--title&args=&viewMode=story")
        cy.get('h1').contains('Cocoa nuts')
    })

})