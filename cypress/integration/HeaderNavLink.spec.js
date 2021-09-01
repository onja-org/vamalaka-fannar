/// <reference types="cypress" />

// Header nav link
describe('Header NavLink Storybook', () => {
  beforeEach('visits a header link', () => {
    cy.visit('http://localhost:6006/?path=/story/header-navlink--logged-in')
  })
  it('should have an ul tag', () => {
    cy.get('a').should('have.attr', 'href')
  })
})
