/// <reference types="cypress" />

const LOGIN_WITH_ERROR =
  'http://localhost:6006/?path=/story/components-onboardinglogin--login-with-error'
const LOGIN_WITHOUT_ERROR =
  'http://localhost:6006/?path=/story/components-onboardinglogin--login-without-error'

describe('Login Storybook', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Login form', { timeout: 10000 })
  })
  it('Has an input email', () => {
    cy.visit(LOGIN_WITHOUT_ERROR)
    cy.contains('form').get('input').should('have.attr', 'type')
  })
  it('Should have an input password', () => {
    cy.visit(LOGIN_WITH_ERROR)
    cy.contains('form').get('input').should('have.attr', 'placeholder')
  })
  it('Has a button for a login with google', () => {
    cy.visit(LOGIN_WITHOUT_ERROR)
    cy.contains('form').get('div').children('button')
  })
})
