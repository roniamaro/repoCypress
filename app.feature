Feature: Cobasi
    Scenario: home-login-entrar
    Exemples
    Background
    Tags
    Given
    When
    Then
    Then
    And
    But

@login
Feature: Login
    Sendo um usuário do sistema X
    Quero completar o Login
    Para que eu possa ter acesso às funcionalidade dentro do sistema.

    Background:
    Dado que o usuário possui uma conta no sistema

    @positivo
    Scenario: Login válido
    And ele acesse a página do Login
    And ele preenche seus credenciais válidas
    When ele clicar em "Acessar"
    Then ele deverá ser direcionado para a página principal

    @negativo
    Scenario:Login inválido
    And ele acesse a página do Login
    And ele preenche uma das credenciais inválidas
    When ele clicar em "Acessar"
    Then ele deverá ser direcionado para a página principal