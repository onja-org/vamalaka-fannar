/// <reference types="cypress" />

describe('Home Screen', () => {
  beforeEach('visits site', () => {
    cy.visit('/')
  })
  it('Displays the slogan', () => {
    cy.contains('Vamalaka - Madagascars peer-to-peer e-commerce platform')
  })
})
