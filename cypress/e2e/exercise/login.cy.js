// <refence type="cypress"/>

describe('Funcionalidade: Login', () => { 

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('teste@124.com')
        cy.get('#password').type('teste@124')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, teste-8697 (não é teste-8697? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {  
        cy.get('#username').type('tester@124.com')
        cy.get('#password').type('teste@124')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')       
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        
        cy.get('#username').type('teste@124.com')
        cy.get('#password').type('senha_errada')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail')
    });
})