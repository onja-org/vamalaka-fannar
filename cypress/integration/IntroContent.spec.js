/// <reference types="cypress" />

describe('Intro Content', () => {
  beforeEach('visits Intro Content', () => {
    cy.visit('http://localhost:6006')
    cy.contains('IntroContent', { timeout: 1000 })
  })
  it('Has content', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-introcontent--content&args=&viewMode=story'
    )
    cy.get('div').find('h3')
    cy.get('p')
    cy.get('figure')
      .find('img')
      .should('have.attr', 'src', 'static/media/introImage.9b84ba68.png')
    cy.get('button')
  })
})
