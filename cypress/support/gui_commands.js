Cypress.Commands.add("login", (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password"),
    { cacheSession = true } = {}, // estamos guardando o login no cypress
  ) => {
    const login = () => {
      cy.visit("/users/sign_in")

      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false,
      })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }

    //aqui estamos criando uma variável onde vamos permitir compartilhar o cache com as specs, usando em outros arquivos
    const options = {
      cacheAcrossSpecs: true,
    }

    //agora vamos colocar uma condição para que o quando chamarmos a session ele execute o comando abaixo, se não apenas executa o login
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }   
  }
)

Cypress.Commands.add("logout", () => {
  cy.get(".qa-user-avatar").click()
  cy.contains("Sign out").click()
})

Cypress.Commands.add("gui_createProject", project => {
  cy.visit("/projects/new")

  cy.get("#project_name").type(project.name)
  cy.get("#project_description").type(project.description)
  cy.get(".qa-initialize-with-readme-checkbox").check()
  cy.contains("Create project").click()
})
