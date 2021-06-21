/// <reference types="cypress" />

describe('Layout storybook', () => {
  beforeEach('visits layout', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Layout', { timeout: 20000 })
  })
  it('Has the header component', () => {
    cy.contains('Layout')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-layout--page-header&args=&viewMode=story'
    )
  })
  it('Has the footer component', () => {
    cy.contains('Layout')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-layout--page-footer&args=&viewMode=story'
    )
  })
})
