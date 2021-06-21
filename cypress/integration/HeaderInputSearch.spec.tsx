/// <reference types="cypress" />

// Input search
describe('Input Storybook', () => {
  beforeEach('visits an input element', () => {
    cy.visit('http://localhost:6006')
  })
  it('Input Field', () => {
    cy.visit(
      'http://localhost:6006/?path=/story/header-input--input-element&viewMode=story'
    )
    cy.get('input').should('have.attr', 'placeholder')
  })
})
