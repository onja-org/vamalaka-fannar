/// <reference types="cypress" />

describe('RoundedCornerImage', () => {
  beforeEach('visits rounded corner image', () => {
    cy.visit('http://localhost:6006')
    cy.contains('RoundedCornerImage', { timeout: 20000 })
  })
  it('Has the RoundedCornerImage component', () => {
    cy.contains('RoundedCornerImage')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-roundedcornerimage--rounded-image&viewMode=story'
    )
    cy.get('img').should('have.attr', 'src')
  })
})
