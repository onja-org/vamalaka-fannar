describe('Storybook Components', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006')
    cy.contains('Back', { timeout: 20000 })
  })

  it('Has the Back component', () => {
    cy.contains('Back')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-back--short&args=size:medium&viewMode=story'
    )
    cy.contains('Back')
    cy.get('a')
      .find('svg')
      .find('path')
      .should('have.attr', 'fill', 'currentColor')
  })
})
