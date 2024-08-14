/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()  
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

    it('Deve buscar um produto da lista com sucesso', () => {
       produtosPage.buscarProdutoLista('Apollo Running Short')
       cy.get('.product_title').should('contain', 'Apollo Running Short')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
     });

    it('Deve visitar a página do produto', () => {
        let produto = 'Atlas Fitness Tank'
        produtosPage.visitarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve adicionar produto ao carrinho', () => {
        let produto = 'Atlas Fitness Tank'
        let qtd = 3

        produtosPage.visitarProduto(produto)
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho', () => {
        cy.fixture('produtos').then(dados => {
            let produto = 2
            produtosPage.visitarProduto(dados[produto].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[produto].tamanho, 
                dados[produto].cor, 
                dados[produto].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[produto].nomeProduto)
    
        })
    });
})