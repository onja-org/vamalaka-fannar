/// <reference types="cypress" />

describe('Favorite', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Add to favorite', { timeout: 20000 })
  })
  it('Should have button', () => {
    cy.visit(
      'http://localhost:6006/?path=/story/components-add-to-favorite--add-him-to-favorite'
    )
    cy.contains('Add Him To Favorite')
  })
})
