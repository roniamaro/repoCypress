/// <reference types="cypress"/>

describe('Automationpratice', () => {
    describe('home-login-entrar', () => {
        // beforeEach(() => {
        //     cy.viewport('iphone-xr')
        // })
        
        it('Login com sucesso', () => {
            // DADO
            // acessar a tela de login
            //cy.viewport('iphone-xr')
            cy.visit('https://automationpratice.com.br/login')
            // digitar email
            cy.get('#user').type('login@login.com.br')
            // digitar senha
            cy.get('#password').type('123456')
    
            // QUANDO
            // clicar no botão de login
            cy.get('#btnLogin').click()
    
            // ENTÃO
            // validar se o login foi realizado
            cy.get('#swal2-title').should('be.visible');
            cy.get('#swal2-title').should('have.text', "Login realizado");
            cy.url().should('contain', '/my-account');
        });
    
        it('Login com email vazio', () => {
            // DADO
            cy.visit('https://automationpratice.com.br/login')
            cy.get('#password').type('123456')

            // QUANDO
            cy.get('#btnLogin').click()
    
            // ENTÃO
            cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        });
    
        it('Login com email inválido', () => {
            // DADO
            // acessar a tela de login
            cy.visit('https://automationpratice.com.br/login')
            // não digitar email
            cy.get('#user').type('1234@1234')
            // digitar senha
            cy.get('#password').type('123456')

    
            // QUANDO
            // clicar no botão de login
            cy.get('#btnLogin').click()
    
            // ENTÃO
            // validar se o login foi realizado
            cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
            
        });
    
        it('Login com senha vazio', () => {
            /// DADO
            cy.visit('https://automationpratice.com.br/login')
            cy.get('#user').type('login@login.com.br')

            // QUANDO
            cy.get('#btnLogin').click()
    
            // ENTÃO
            cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        });
    
        it('Login com senha inválido', () => {
            /// DADO
            cy.visit('https://automationpratice.com.br/login')
            cy.get('#user').type('login@login.com.br')
            cy.get('#password').type('123')

            // QUANDO
            cy.get('#btnLogin').click()
    
            // ENTÃO
            cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        });
    })
})