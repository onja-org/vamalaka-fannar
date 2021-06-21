describe('LeftSide', () => {
  beforeEach('visits site', () => {
    cy.visit('http://localhost:6006')
    cy.contains('LeftSide', { timeout: 20000 })
  })
  it('Has a left side view with baobab', () => {
    cy.contains('LeftSide')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-leftside--view-with-baobab&args=&viewMode=story'
    )
    cy.get('p')
  })
  it('Has a left side view with farmer', () => {
    cy.contains('LeftSide')
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-leftside--view-with-farmer&args=&viewMode=story'
    )
    cy.get('p')
  })
})
