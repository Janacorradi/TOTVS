const el = require ('./elements').ELEMENTOSITE

class TOTVS {

    SalvarPreçoNomeSite(){
        
        cy.visit(el.SITETOTVS);
        cy.get(el.PESQUISAR).type("Meu coletor de dados{enter}");
        cy.get(el.MEUCOLETORDADOS).click()
        cy.get(el.NOMEPRODUTOSITE).invoke('text').as('NomeProduto');
        cy.get(el.BOTAOCOMPRAR).click()
        cy.get(el.PRECOPRODUTOSITE).invoke('text').as('ValorProduto');
        

    }
    acessarSite(){
        cy.visit(el.SITETOTVS)
    
      
    }
    pesquisarproduto(){

        cy.get(el.PESQUISAR).type("Meu coletor de dados{enter}");
        cy.get(el.MEUCOLETORDADOS).click()
        cy.get(el.COOKIES).click()
        cy.get(el.BOTAOCOMPRAR).click()
        cy.get(el.BOTAOPROXIMO).click()
        cy.get(el.BOTAOCOLOCARCARRINHO).click()

 }
 
}
export default new TOTVS ();