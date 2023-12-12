describe('Mi primera prueba 😎', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
      .contains('type')
      .click()
      .url()
      .should('include', '/commands/actions')
      .get('.action-email')
      .type('maximilianocarsi@gmail.com')
      .get('.action-email')
      .should('have.value', 'maximilianocarsi@gmail.com')
  })
})
