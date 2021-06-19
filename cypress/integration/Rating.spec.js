/// <reference types="cypress" />

// To test Storybook components with Cypress, go to Storybook, click the share icon in the top right corner which gives you an individual url for each component. Then visit that url and perform your tasks as usual

describe("Rating", () => {
    beforeEach("visits rating", () => {
        cy.visit("http://localhost:6006")
    })
    it("Has the Rating component", () => {
       cy.visit("http://localhost:6006/iframe.html?id=example-rating--rated-one-star&args=star:5&viewMode=story")
       cy.get('div')
    })
})