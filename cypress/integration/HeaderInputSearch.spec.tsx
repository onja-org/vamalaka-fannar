/// <reference types="cypress" />

// Input search
describe('Input Storybook', () => {
  beforeEach('visits an input element', () => {
    cy.visit('http://localhost:6006/?path=/story/example-introduction--page')
    cy.contains('Input')
  })
  it('Input Field', () => {
    cy.visit('http://localhost:6006/?path=/story/header-input--input-element')
    cy.get('input').should('have.attr', 'placeholder')
  })
})
