/// <reference types="cypress" />

describe('Buttons Screen', () => {
  beforeEach('visits site', () => {
     cy.visit('http://localhost:6006')
    cy.contains('Buttons', { timeout: 20000 })
  })
  it('Displays the learn button', () => {
    cy.contains('Buttons')
    cy.visit(
      'http://localhost:6006/?path=/story/components-buttons--learn-enabled'
    )
    cy.contains('Learn more')
  })
  it('Displays the learn disabled button', () => {
    cy.contains('Buttons')
    cy.visit(
      'http://localhost:6006/?path=/story/components-buttons--learndisabled'
    )
    cy.contains('Learn more')
  })
  it('Displays the trust button', () => {
    cy.contains('Buttons')
    cy.visit('http://localhost:6006/?path=/story/components-buttons--trust')
    cy.contains('Can you trust us?')
  })
})
