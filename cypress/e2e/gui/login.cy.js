describe('Login', () => {
    it('successfully', () => {
      cy.login()
      cy.get('.qa-user-avatar').should('be.visible')
      cy.get('[data-qa-selector="welcome_title_content"]').contains("Welcome to GitLab")
    })
  })