/// <reference types="cypress" />

describe('offer', () => {
  beforeEach('visits offer story', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Offer', { timeout: 20000 })
  })
  it('Has offer details', () => {
    cy.contains('Offer')
  })
})
