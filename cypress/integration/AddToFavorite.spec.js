/// <reference types="cypress" />

describe('Favorite', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Add to favorite', { timeout: 20000 })
  })
  it('Should have button', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-add-to-favorite--add-him-to-favorite&args=&viewMode=story'
    )
  })
})
