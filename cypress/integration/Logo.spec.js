/// <reference types="cypress" />

describe('Logo', () => {
  beforeEach('visits logo', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Logo', { timeout: 20000 })
  })
  it('Has the Logo component', () => {
    cy.contains('Logo')
    cy.visit(
      'http://localhost:6006/iframe.html?id=header-logo--logo-template&args=&viewMode=story'
    )
    cy.get('a').should('have.attr', 'href')
    cy.get('img').should('have.attr', 'src')
  })
})
