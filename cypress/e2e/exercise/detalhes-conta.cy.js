/// <reference types="cypress" />

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    });


    it('Deve completaer detalhes da conta', () => {
        cy.detalhesConta('Jorge','Tester','teste.qa ')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});