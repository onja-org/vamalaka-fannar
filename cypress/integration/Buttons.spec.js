/// <reference types="cypress" />
describe('Buttons Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Buttons', { timeout: 20000 })
  })
  it('Displays the learn button', () => {
    cy.contains('Buttons')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-buttons--learn-abled&args=&viewMode=story'
    )
    cy.contains('Learn more')
  })
  it('Displays the learn button', () => {
    cy.contains('Buttons')
    cy.visit(
      'http://localhost:6006/?path=/story/components-buttons--learn-disabled'
    )
    cy.contains('Learn more')
  })
  it('Displays the trust button', () => {
    cy.contains('Buttons')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-buttons--trust&args=&viewMode=story'
    )
    cy.contains('Can you trust us?')
  })
})
