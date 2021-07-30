/// <reference types="cypress" />
describe('Home Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('/')
  })
  it('has a className', () => {
    cy.get('div').should('have.class', 'App')
  })
})
