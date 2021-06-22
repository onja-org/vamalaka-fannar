/// <reference types="cypress" />

const MALAGASY_PRICE_PAGE =
  'http://localhost:6006/iframe.html?id=priceofoffer-priceofoffer--malagasy-pice&args=&viewMode=story'

const DOLLAR_PRICE_PAGE =
  'http://localhost:6006/iframe.html?id=priceofoffer-priceofoffer--dollar-price&args=&viewMode=story'

const EURO_PRICE_PAGE =
  'http://localhost:6006/iframe.html?id=priceofoffer-priceofoffer--euro-price&args=&viewMode=story'

describe('Price of offer Storybook', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Button', { timeout: 20000 })
  })

  it('Has the price of offer component', () => {
    cy.contains('PriceOfOffer')
    cy.visit(
      'http://localhost:6006/?path=/story/priceofoffer-priceofoffer--malagasy-pice'
    )
    cy.contains('PriceOfOffer')
  })

  it('Has the Malagasy price', () => {
    cy.contains('PriceOfOffer')
    cy.visit(MALAGASY_PRICE_PAGE)
    cy.contains('Ar1000/peice')
  })

  it('Has the Euro price', () => {
    cy.contains('PriceOfOffer')
    cy.visit(EURO_PRICE_PAGE)
    cy.contains('€12213/sobika')
  })

  it('Has the Dollar price', () => {
    cy.contains('PriceOfOffer')
    cy.visit(DOLLAR_PRICE_PAGE)
    cy.contains('$2332/kilo')
  })
})
