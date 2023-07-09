  Cypress.Commands.add('cloneViaSSH', project => {
    //vamos criar uma variavel onde vamos pegar a baseurl e vamos substituir o http:// por nada.
    const domain = Cypress.config('baseUrl').replace('http://', '')
    //aqu vamos executar como estivessemos na linha de comando.
    cy.exec(`cd cypress/downloads/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
  })
  