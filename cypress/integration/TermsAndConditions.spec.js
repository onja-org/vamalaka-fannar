/// <reference types="cypress" />

describe('Storybook', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('TermsAndConditions', { timeout: 20000 })
  })
  it('Has the unChecked', () => {
    cy.contains('TermsAndConditions')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-termsandconditions--un-checked&args=&viewMode=story'
    )
    cy.contains('I agree to the terms & conditions')
  })

  it('Has the checked value', () => {
    cy.contains('TermsAndConditions')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-termsandconditions--checked&args=&viewMode=story'
    )
    cy.contains('I agree to the terms & conditions')
    cy.get('input').should('have.attr', 'checked')
  })

  it('Has the anchor', () => {
    cy.contains('TermsAndConditions')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-termsandconditions--checked&args=&viewMode=story'
    )
    cy.contains('I agree to the terms & conditions')
    cy.get('a').should('have.attr', 'href', '/')
  })
})
