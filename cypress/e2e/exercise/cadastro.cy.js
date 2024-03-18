//// <refence type="cypress"/>
import { Faker, faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => { 

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    it('Deve fazer cadastro', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@124')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        //cy.wait(5000)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    })

    it('Deve completar o cadastro com sucesso - Usando variaveis', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobreNome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@124')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobreNome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    })
    
})