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
    cy.contains('Eliud Kipchoge | Mahanoro | Madagascar')
    cy.get('span').contains('Eliud Kipchoge | Mahanoro | Madagascar')
    cy.get('div')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'png')
    cy.get('img').should('have.attr', 'alt')
  })
})
