/// <reference types="cypress" />

describe('Email', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Email', { timeout: 20000 })
  })
  it('Should have button', () => {
    cy.visit('http://localhost:6006/?path=/story/components-email--emailing')
    cy.contains('Emailing')
  })
})
