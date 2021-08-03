/// <reference types="cypress" />

describe('Storybook Components', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Loading', { timeout: 20000 })
  })
})

it('Has an image tag that has a source and an alt', () => {
  cy.visit(
    'http://localhost:6006/?path=/story/components-loading--large-loading'
  )
  cy.get('div').contains('Large Loading')
  cy.get('div').contains('Medium Loading')
  cy.get('div').contains('Small Loading')
})
