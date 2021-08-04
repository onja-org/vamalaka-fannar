/// <reference types="cypress" />

describe('Input', () => {
  beforeEach('visits input component', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Input', { timeout: 20000 })
  })
  it('Has input component', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=input-input-name--large-input&args=&viewMode=story'
    )
  })
})
