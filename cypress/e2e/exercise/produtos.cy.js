/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    })
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .first()
            .click()
    });

    it('Deve selecionar um outro produto da lista', () => {
        cy.get('.product-block')
            .eq(2)
            .click()
    });

    it('Deve selecionar o produto Apollo Running Short', () => {
        cy.get('.product-block')
            .contains('Apollo Running Short')
            .click()
    });
})