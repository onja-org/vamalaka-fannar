/// <reference types="cypress" />

describe('Home Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('/')
  })
  it('Displays the slogan', () => {
    cy.contains('Discover amazing products and profit from a truly fair market')
  })
})
