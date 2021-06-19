/// <reference types="cypress" />

// To test Storybook components with Cypress, go to Storybook, click the share icon in the top right corner which gives you an individual url for each component. Then visit that url and perform your tasks as usual

describe("Descriptive", () => {
    beforeEach("visits storybook", () => {
        cy.visit("http://localhost:6006")
        cy.contains("Button", { timeout: 20000 })

    })
    it("Has the paragraph component", () => {
        cy.contains("p")
        cy.visit('http://localhost:6006/iframe.html?id=components-description-offer--description&args=&viewMode=story')
        cy.contains("p")
    })
})
