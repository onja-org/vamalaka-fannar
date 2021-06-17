describe('Storybook Components', () => {
  beforeEach('visits storybook', () => {
    cy.visit('http://localhost:6006/?path=/story/example-introduction--page')
    cy.contains('LinkSection', { timeout: 20000 })
  })

  it('Has the LinkSection component', () => {
    cy.contains('LinkSection')
    cy.visit('http://localhost:6006/?path=/story/example-linksection')
    cy.contains('LinkSection')
    cy.get('a')
      .should('have.attr', 'href')
  })
})