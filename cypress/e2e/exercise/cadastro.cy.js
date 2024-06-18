///<reference types="cypress"/>

import { Faker, faker } from "@faker-js/faker";

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    it('Deve fazer cadastro com usuário estático', () => {
        cy.get('#reg_email').type('teste@124.com')
        cy.get('#reg_password').type('teste@124')
        cy.get(':nth-child(4) > .button').click()

        cy.get('body').then($body => {
            if ($body.find('.woocommerce-message').length) {
                // Se a mensagem de sucesso existe, o teste passa
                cy.get('.woocommerce-message').should('exist');
            } else if ($body.find('.woocommerce-error').length) {
                // Se a mensagem de erro existe, verifica o texto
                cy.get('.woocommerce-error').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.');
            } else {
                // Se nenhuma das mensagens existe, falha o teste
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
                cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
                cy.get('#account_first_name').type(faker.person.firstName())
                cy.get('#account_last_name').type(faker.person.lastName())
                cy.get('.woocommerce-Button').click()
                cy.get('.woocommerce-message').should('exist');
            }
        })
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