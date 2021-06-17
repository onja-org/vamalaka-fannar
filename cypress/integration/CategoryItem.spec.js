/// <reference types="cypress" />

describe('Storybook Components', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('button', { timeout: 20000 })
  })
})

it('Has the button component', () => {
  cy.contains('button')
  cy.visit('http://localhost:6006/?path=/story/example-category-item--primary')
})
