/// <reference types="cypress" />

describe('Header Storybook', () => {
  beforeEach('visits a header link', () => {
    cy.visit('http://localhost:6006')
  })
  it('should contains an input field and a ul with anchors', () => {
    cy.visit('http://localhost:6006/?path=/story/header--header-container')
    cy.get('label')
    cy.get('ul')
  })
})
