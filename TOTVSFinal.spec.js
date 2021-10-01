///<reference types="cypress"/>

import TOTVS from './TESTETOTVS'
const el = require ('./TESTETOTVS/elements').ELEMENTOSITE


describe("Automatizar Site TOTVS", () => {
    beforeEach(() => {
        TOTVS.SalvarPreçoNomeSite()
    })

    it("Comparar Nome e Preço Site com Carrinho", function () {

       TOTVS.acessarSite()
       TOTVS.pesquisarproduto()
    

       // PARA COMPARAR OS 2 PREÇOS >>
       cy.get(el.NOMEPRODUTOCARRINHO).should('contain', this.NomeProduto)
       cy.get(el.PRECOPRODUTOCARRINHO).should('contain', this.ValorProduto)
       
    
    })
    
}) 