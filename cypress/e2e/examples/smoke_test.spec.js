describe('Smoke Test', () => {
  it('visits all the pages', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Blog').click()
    cy.contains('Hidden Gems for Rails').click()
    cy.contains('Talks').click()
  })
})
