/// <reference types="cypress" />

describe('Storybook Components', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Categories', { timeout: 20000 })
  })
  it('Should have a list of a few categories with clickable buttons', () => {
    cy.visit(
      'http://localhost:6006/?path=/story/components-categories--multiple-categories'
    )
    cy.contains('Multiple Categories')
    cy.get('ul')
    cy.get('button')
  })
})
