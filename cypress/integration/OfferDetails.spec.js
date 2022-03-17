/// <reference types="cypress" />

describe('offer details', () => {
    beforeEach('visits offer details story', () => {
      cy.visit('http://localhost:6006')
      cy.contains('Offer details')
    })
    it('Has offer details', () => {
        cy.contains('Offer details')
        cy.visit("http://localhost:6006/?path=/story/offer-offer-details--offer-details-component")
        cy.contains('Offer Details Component')
        cy.get('ul', { timeout: 4000 }).children('li')
        cy.get('div').first()
    })
  })