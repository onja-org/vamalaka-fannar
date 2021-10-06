/// <reference types="cypress" />

describe('Phone number', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Phone Number', { timeout: 20000 })
  })
  it('Should have button', () => {
    cy.visit(
      'http://localhost:6006/?path=/story/components-phone-number--reveal-phone-number'
    )
    cy.contains('Reveal Phone Number')
  })
})
