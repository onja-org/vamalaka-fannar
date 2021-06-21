/// <reference types="cypress" />

describe('Storybook Page Footer Component', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Page Footer', { timeout: 20000 })
  })

  it('Has a page footer component', () => {
    cy.contains('Page Footer')
  })

  it('Has different stories', () => {
    cy.contains('Page Footer')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-page-footer--page-footer-first-view&args=&viewMode=story'
    )
    cy.contains('Madamada')
    cy.get('footer').then(($footer) => $footer.find('details').length > 0)
    cy.get('details').then(($details) => $details.find('a').length > 0)
    cy.get('details').then(($details) => $details.find('summary').length > 0)
    cy.get('details').find('a').should('have.attr', 'href')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-page-footer--page-footer-second-view&args=&viewMode=story'
    )
    cy.contains('Madamada')
    cy.get('footer').then(($footer) => $footer.find('details').length > 1)
    cy.get('details').then(($details) => $details.find('summary').length > 1)
    cy.get('details').then(($details) => $details.find('a').length > 0)
    cy.get('details').find('a').should('have.attr', 'href')
  })
})
