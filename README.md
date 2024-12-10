# repoCypress
Um repositório criado para armazenar os projetos desenvolvidos em aula.

Pré requisitos:
  NodeJS instalado
  VSCode
  GitBash
1 - Criar projeto
  npm init -y
2 - Instalar Cypress
  npm install cypress
3 - Iniciar Cypress para configurar
  npx cypress open
  Irá abrir um navegador com o Cypress rodando;
    link: 
  Clique em E2E Testing > "not configured" > Continue > Chrome;
4 - Criar arquivo de testes
  No VSCode:
    pasta cypress > criar uma pasta "e2e";
    todos os testes ficarão dentro da pasta "e2e";
    pasta "e2e" > criar os arquivos das funcionalidades que serão testadas;
    arquivo "listar-dispositivos.cy.js";
5 - Criar cenários
  No VSCode:
    arquivo "listar-dispositivos.cy.js";

# estrutura de um arquivo .cy
/// <reference types="cypress"/>

//funcionalidade
    //cenario de teste 1

    //cenario de teste 2

# Um arquivo Gherkin é composto basicamente por:

link: https://docbehat.readthedocs.io/pt/v3.1/guides/1.gherkin.html

Funcionalidade;
Descrição da funcionalidade;
Cenários: compostos por uma sequência de passos, que descrevem o comportamento do sistema.

Vamos entender melhor:

DADO, QUANDO, ENTÃO
GIVEN, WHEN, THEN
(PASSADO, PRESENTE, FUTURO)

Dado (Given) é uma precondição. * Muitas vezes começamos a escrever o dado como uma ação.

Quando (When) é uma ação.
Então (Then) é um resultado esperado.
E (And) visa complementar qualquer uma das palavras chaves citadas anteriormente
Mas (But) é a forma negativa do “Então”, quando o resultado esperado NÃO DEVE ocorrer.

# Abordagem Imperativa:

Você descreverá “como” você faz alguma coisa.

Por exemplo, respondendo de forma Imperativa:

_“Vejo que a mesa próxima a TV está vazia. Minha companhia e eu vamos andando até lá e
nos sentaremos”.

O estilo imperativo usa Steps altamente reutilizáveis ligados à grande parte da interface do usuário e requer mais decisões de design. Se um novo campo for adicionado, você deverá atualizar o cenário para refleti-lo, mesmo que o objetivo do cenário não tenha mudado.

Vamos ver um cenário Imperativo (como):

    Cenário: Mostrar mensagem de sucesso quando o usuário for criado
        Dado que estu na tela de cadastro de usuário
        Quanto eu clicar no botão "novo usuário"
        E preencho o campo "nome"
        E o campo "email"
        E o campo "senha"
        E o campo "telefone"
        E clico no botão "salvar"
        Então recebo uma mensagem de "usuário cadastrado com sucesso"

# Abordagem Declarativa:

Você descreverá “o que” você faz.

Por exemplo, respondendo de forma Declarativa:

“Mesa para dois, por favor”.

O estilo declarativo está mais alinhado com as histórias do usuário. O número de Steps é menor que o estilo imperativo, que tende a produzir Cenários com muitos Passos. Com o estilo declarativo, o objetivo do Cenário permanece claro. Quando uma nova Etapa é adicionada, ele não precisa ser modificado.

Vamos ver um cenário Declarativo (o que):
    
    Cenário: Mostrar mensagem de sucesso quando o usuário for criado
        Dado um usuário que ainda não tem cadastro
        Quanto os dados forem preenchidos
        Então é exibida a mensagem "usuário cadastrado com sucesso"

Após entendermos um pouco sobre o estilo Imperativo e o Declarativo, qual devemos escolher?

Um dos fatores mais importantes para decidir qual estilo usar (além da manutenção ou duplicação do código) é o cliente. Os recursos destinam-se a facilitar a comunicação entre o negócio, o desenvolvedor e o testador sobre o valor comercial e a funcionalidade.

Caso a necessidade dos interessados esteja nos campos de um formulário, ela é indicada no cenário para que haja confiança no sistema (pelos clientes), utilizando assim o estilo imperativo. Se as especificações precisam ser compreendidas por um público mais amplo do que os desenvolvedores, para alcançar um entendimento entre todas as partes interessadas, então usaremos um estilo declarativo.

Para isso, como na maioria das áreas de desenvolvimento de software, não existe uma resposta correta, no final depende apenas da situação.

# Esquema do Cenário
Copiar e colar cenários para usar diferentes valores pode ser muito tedioso e repetitivo:

    Scenario: Comer 5 em cada 12
    Dado que tenho 12 pepinos
    Quando eu comer 5 pepinos
    Então eu devo ter 7 pepinos

    Scenario: Comer 5 em cada 20
    Dado que tenho 20 pepinos
    Quando eu comer 5 pepinos
    Então eu devo ter 15 pepinos

Os Esquemas do Cenários nos permitem formular estes exemplos com maior precisão através da utilização de um modelo com espaços reservados:

    Esquema do Cenário: Comendo
    Dado que tenho <antes> pepinos
    Quando eu comer <come> pepinos
    Então eu devo ter <depois> pepinos

    Exemplos:
        | antes | come | depois |
        |  12   |  5   |   7    |
        |  20   |  5   |   15   |