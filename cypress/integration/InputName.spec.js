/// <reference types="cypress" />

describe('Input Name', () => {
  beforeEach('visits input component', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Input Name', { timeout: 20000 })
  })
  it('Has input component', () => {
    cy.contains('Input Name')
    cy.visit(
      'http://localhost:6006/iframe.html?id=input-input-name--large-input&args=&viewMode=story'
    )
    cy.get('label').contains('Your full name')
    cy.get('input').should('have.attr', 'placeholder')
  })
})
