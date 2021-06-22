/// <reference types="cypress" />

const HAVE_SIGNEDUP_PAGE =
  'http://localhost:6006/iframe.html?id=login-login--already-have-an-account&args=&viewMode=story'

const NOT_USER_YET_PAGE =
  'http://localhost:6006/iframe.html?id=login-login--not-user&args=&viewMode=story'

describe('Login Storybook', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Login', { timeout: 20000 })
  })

  it('Has the have already signedup text', () => {
    cy.contains('Login')
    cy.visit(HAVE_SIGNEDUP_PAGE)
    cy.contains('Already have an account?Sign In')
  })

  it('Has the not yet a user text', () => {
    cy.contains('Login')
    cy.visit(NOT_USER_YET_PAGE)
    cy.contains('Not a user yet?Sign Up')
  })

  it('Has the anchor an href attribute', () => {
    cy.get('a').should('have.attr', 'href')
  })
})
