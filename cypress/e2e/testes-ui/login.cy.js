/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade; Login', () => {

    beforeEach(() => {
        cy.visit('/login')
    });
    //Teste de Login
    it('Deve fazer o login corrretamente', () => {
        cy.get('[data-qa="login-email"]').type('testeaires@teste.com')
        cy.get('[data-qa="login-password"]').type('teste123@')
        cy.get('[data-qa="login-button"]').click()
        cy.get('b').should('exist')
    });

    //Teste de login com massa de dados
    it('Deve fazer login corretamente - Usando massa de dados', () => {
        cy.get('[data-qa="login-email"]').type(perfil.user)
        cy.get('[data-qa="login-password"]').type(perfil.password)
        cy.get('[data-qa="login-button"]').click()
        cy.get('b').should('exist')
    });
    //Teste de login - Usuário ou senha inválidos
    it('Deve exibir a mensagem de erro', () => {
        cy.get('[data-qa="login-email"]').type('testeaires@teste.com')
        cy.get('[data-qa="login-password"]').type('teste123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('exist')
    });

    //Teste de login - Usuário ou senha inválidos com massa de dados
    it.only('Deve exibir a mensagem de erro - Usando massa de dados', () => {
        cy.get('[data-qa="login-email"]').type(perfil.user)
        cy.get('[data-qa="login-password"]').type(perfil.wrongPassword)
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('exist')
    });

});
//testeaires@teste.com
//teste123@