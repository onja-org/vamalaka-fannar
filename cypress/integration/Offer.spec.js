/// <reference types="cypress" />

describe('offer', () => {
  beforeEach('visits offer story', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Offer', { timeout: 20000 })
  })
  it('Has the image component', () => {
    cy.contains('Offer')
    cy.visit(
      'http://localhost:6006/iframe.html?id=offer-offer--offer-component&args=&viewMode=story'
    )
    cy.contains('Cocoa nuts')
    cy.get('div')
      .find('img')
      .should('have.attr', 'src', 'static/media/offer.237345fe.svg')
    cy.contains(
      'This is a very detailed description that is absolutely necessary for being attractive to customers...'
    )
  })
})
