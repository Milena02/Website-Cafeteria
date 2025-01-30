/// <reference types="cypress" />

describe('Testes da Página Manhattan - Coffee House', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5500'); // Altere a URL conforme necessário
    });

    it('Deve carregar a página corretamente', () => {
        cy.get('h1').should('contain', 'MANHATTAN - COFFEE HOUSE');
    });

    it('Deve verificar se o menu de navegação está visível', () => {
        cy.get('.topo a').should('have.length', 3);
        cy.get('.topo a').eq(0).should('contain', 'INFORMAÇÕES');
        cy.get('.topo a').eq(1).should('contain', 'CONTATOS');
        cy.get('.topo a').eq(2).should('contain', 'HORÁRIOS');
    });

    it('Deve navegar até a seção de informações', () => {
        cy.get('a[href="#informacoes"]').click();
        cy.url().should('include', '#informacoes');
    });

    it('Deve verificar se a seção de horários contém os dias da semana', () => {
        cy.get('.lista-horarios li').should('have.length', 7);
        cy.get('.lista-horarios li').eq(0).should('contain', 'SEGUNDA');
        cy.get('.lista-horarios li').eq(1).should('contain', 'TERÇA');
    });

    it('Deve verificar se o Google Maps está sendo carregado', () => {
        cy.get('iframe').should('have.attr', 'src').and('include', 'google.com/maps');
    });

    it('Deve verificar se o rodapé contém os direitos autorais', () => {
        cy.get('.container-rodape').should('contain', 'Todos os direitos reservados');
    });
});