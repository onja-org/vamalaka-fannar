/// <reference types="cypress" />

describe('First image within offer', () => {
    beforeEach('visits image story', () => {
      cy.visit('http://localhost:6006')
      cy.contains('ImageWithinOffer', { timeout: 20000 })
    })
    it('Has the image component', () => {
      cy.contains('ImageWithinOffer')
      cy.visit(
        'http://localhost:6006/iframe.html?id=offer-imagewithinoffer--first-image&args=&viewMode=story'
      )
      cy.get('div').find('img').should('have.attr', 'src', 'static/media/offer.237345fe.svg');
      cy.get('div').find('img').should('have.attr', 'alt', 'First image for offer')
    })
  })

