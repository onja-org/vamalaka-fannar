/// <reference types="cypress" />

describe('Step counter', () => {
  beforeEach('visits step counter', () => {
    cy.visit('http://localhost:6006')
    cy.contains('StepCounter', { timeout: 20000 })
  })
  it('Has step one', () => {
    cy.contains('StepCounter')
    cy.visit(
      'http://localhost:6006/iframe.html?id=stepcounter-stepcounter--step-one&args=&viewMode=story'
    )
    cy.contains('Step 01/02')
    cy.contains('Personal Info.')
  })
  it('Has step two', () => {
    cy.contains('StepCounter')
    cy.visit(
      'http://localhost:6006/iframe.html?id=stepcounter-stepcounter--step-two&args=&viewMode=story'
    )
    cy.contains('Step 02/02')
    cy.contains('Email Verification')
  })
})
