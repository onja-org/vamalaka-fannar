/// <reference types="cypress" />

describe('Storybook seller preview information components', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Seller preview information', { timeout: 20000 })
  })
  it('Has a seller preview information component', () => {
    cy.contains('Seller preview information')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-seller-preview-information--seller-preview&args=&viewMode=story'
    )
    cy.get('img').should('have.attr', 'alt')
  })
})
