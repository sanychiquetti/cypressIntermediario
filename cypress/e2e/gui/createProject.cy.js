import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    //pré-condição:
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.visit('/')
    })
    it('successfully', () => {
        //vamos colocar em uma variável pois vamos usar outras vezes no projeto, então é só chamar o objeto: project
        const project = {
            name: `project-${faker.datatype.uuid()}`, //chamando a forma randomica pelo faker
            description: faker.random.words(5) //usando a forma randomica com o
        }
        //ação:
        cy.gui_createProject(project) //comando criado na pasta gui_commands
        //resultados esperados/validações:
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})