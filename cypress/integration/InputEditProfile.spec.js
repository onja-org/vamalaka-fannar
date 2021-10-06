/// <reference types="cypress" />

describe('Input', () => {
    beforeEach('visits input component', () => {
      cy.visit('http://localhost:6006')
      cy.contains('InputEditProfile', { timeout: 20000 })
    })
    it('Has input component', () => {
      cy.visit(
        'http://localhost:6006/?path=/story/components-inputeditprofile--input'
      )
      cy.contains('Input')
      cy.contains('Address')
    })
  })