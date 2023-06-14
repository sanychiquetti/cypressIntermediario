describe('Logout', () =>{
    beforeEach(() =>{
        cy.login()
        cy.visit("/") //certificar que estamos na pagina inicial
    })

    it('sucessfully', () => {
        cy.logout()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`) // validando que estamos na tela de login
    })
})