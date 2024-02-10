///<refence type="cypress"/>

describe('Funcionalidade: Login', () => { 

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('jorgemkazut@gmail.com')
        cy.get('#password').type('jorgemkazut@gmail.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain',' Olá, jorgemkazut (não é jorgemkazut? Sair)')
    })
})