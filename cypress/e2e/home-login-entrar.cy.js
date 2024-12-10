/// <reference types="cypress"/>

describe('Cobasi', () => {
    describe('home-login-entrar', () => {
        it.only('Login com sucesso', () => {
            // DADO
                // acessar a tela de login
                cy.visit('https://new-site-qa.cobasi.com.br/login/entrar')
                // digitar email
                cy.get('#email').type('login@login.com.br')
                // digitar senha
                cy.get('#password').type('123456')
    
            // QUANDO
                // clicar no botão de login
                cy.get('#btnLogin').click()
    
            // ENTÃO
                // validar se o login foi realizado
                cy.get('#swal2-title').should('have.text', "Login realizado")
                cy.url().should('contain', '/my-account')
        })
    
        it('Login com email vazio', () => {
            // DADO
                // acessar a tela de login
                // não digitar email
                // digitar senha
    
            // QUANDO
                // clicar no botão de login
    
            // ENTÃO
                // validar se o login foi realizado
        })
    
        it('Login com email inválido', () => {
            // DADO
                // acessar a tela de login
                // digitar email inválido (loginEmailInvalido@.com)
                // digitar senha
    
            // QUANDO
                // clicar no botão de login
    
            // ENTÃO
                // validar se o login foi realizado
        })
    
        it('Login com senha vazio', () => {
            // DADO
                // acessar a tela de login
                // digitar email
                // não digitar senha
    
            // QUANDO
                // clicar no botão de login
    
            // ENTÃO
                // validar se o login foi realizado
    
        })
    
        it('Login com senha inválido', () => {
            // DADO
                // acessar a tela de login
                // digitar email
                // digitar senha inválido (1234)
    
            // QUANDO
                // clicar no botão de login
    
            // ENTÃO
                // validar se o login foi realizado
        })
    })
})