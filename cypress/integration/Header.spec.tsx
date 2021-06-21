/// <reference types="cypress" />

describe('Header Storybook', () => {
  beforeEach('visits a header link', () => {
    cy.visit('http://localhost:6006')
  })
  it('should contains a h1, an input field and a ul with anchors', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=header--header-container&viewMode=story'
    )
    cy.get('h1').find('img').should('have.attr', 'src')
    cy.get('label').find('input').should('have.attr', 'type', 'text')
    cy.get('ul').children('li').find('a').should('have.attr', 'href')
  })
})
