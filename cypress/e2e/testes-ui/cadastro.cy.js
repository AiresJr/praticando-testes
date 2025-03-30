/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadstro', () => {

    beforeEach(() => {
        cy.visit('/login')
    });

    // Teste simples de cadastro
    it('Deve fazer o cadastro com sucesso', () => {
        cy.get('[data-qa="signup-name"]').type(faker.internet.username())
        cy.get('[data-qa="signup-email"]').type(faker.internet.email())
        cy.get('[data-qa="signup-button"]').click()
        cy.get('[data-qa="password"]').type('Teste123@')
        cy.get('[data-qa="first_name"]').type(faker.person.firstName())
        cy.get('[data-qa="last_name"]').type(faker.person.lastName())
        cy.get('[data-qa="address"]').type('Praceta 1 de Dezembro')
        cy.get('[data-qa="state"]').type('Lisboa')
        cy.get('[data-qa="city"]').type('Odivelas')
        cy.get('[data-qa="zipcode"]').type('2675-123')
        cy.get('[data-qa="mobile_number"]').type(faker.phone.number({ style: 'national' }))
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('exist')
        cy.get('[data-qa="continue-button"]').click()

    });

    // Teste de cadastro utilizando comando customizado
    it.only('Deve fazer o cadastro com sucesso - Usando comando customizado', () => {
        cy.preCadastro(faker.internet.username(), faker.internet.email(), faker.person.firstName(), faker.person.lastName(), faker.phone.number({ style: 'national' }))
        cy.get('[data-qa="account-created"]').should('exist')
        cy.get('[data-qa="continue-button"]').click()
    });
});
