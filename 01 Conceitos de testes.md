#Bootcamp QAZando Turbo
#Conceitos de testes

##Conceitos de Testes:
__"Processo sistemático para avaliar um programa ou sistema afim de identificar e corrigir falhar, erros ou defeitos."__

##Objetivo:
__"Garantir que o softaware funcione conforme o esperado.
Atendendo aos requisitos e especificações definidos durante o desenvolvimento."__

##Áreas
Verificação de funcionalidades específicas;
Avaliação de desenpenho;
Segurança;
Usabilidade;
Entre outras...

##Fases
Podem ser realizados em diferentes fases do ciclo de vida do desenvolvimento, desde a codificação até a fase de manutenção e atualização.

##Tipo de testes
###Funcionais
__"Tipo de teste que se concentra em verificar se o sistema ou aplicação está funcionando corretamente em relação aos requisitos funcionais específicos.
Esses testes têm como objetivo principal validar se as funcionalidades do software de acordo com o que foi planejado e documentado."__

Os testes funcionais são executados com base nos casos de teste, que descrevem as entradas, ações e resultados esperados.

- Identificação dos requisitos funcionais;
- Criação de casos de teste (uma das etapa mais importantes, se não a mais importante);
- Preparação do ambiente de teste;
- Execução dos casos de teste;

####Casos de testes
São elaborados para cada funcionalidade ou cenário a ser testado.
Descrevem as etapas para executar a funcionalidade, as entradas necessárias e os resultados esperados.

Exemplo:
Caso:
  - Login;
Cenários:
  - Login com sucesso;
  - Login com email inválido;
  - Login com senha inválido;

Caso:
  - Cadastro;
Cenários:
  - Cadastro com sucesso;
  - Email inválido;
  - Documento inválido;

###Não Funcionais
__"Tipo de teste que se concentra em verificar aspectos não relacionados diretamente às funcionalidades do sistema, mas sim em suas características e propriedades."__

Os testes não funcionais são executados para verificar se o software atende a requisitos e critérios não funcionais estabelecidos.

- Desempenho;
- Usabilidade;
- Segurança;
- Confiabilidade;
- Manutenibilidade;
- Portabilidade;

####Reportando um BUG
Título descritivo: "Erro ao faer login com senha incorreta"
Descreva o problema: "Ao digitar uma senha incorreta, o sistema deveria exibir uma mensagem de erro, mas não exibe"

Passo a passo para levar ao bug:

Especifique o ambiente onde o bug ocorreu: "Desktop, Chrome"

Evidências: "Logs, prints, vídeo"

Gravidade: "Baixa, média, alta, crítica"

###Exploratórios
__"É uma abordagem não estruturada de teste, ao se explorar a aplicação livremente, sem roteiros, buscando encontrar falhas ou comportamentos inesperados."__

###Manuais
__"Teste manual sem uma ferramenta de automação."__

São mais flexíveis, melhor para cenários complexos... exploratórios.

###Automatizados
__"Utilizando ferramentas e scripts para realizar a execução de casos de teste de forma automática, sem a necessidade de intervenção manual."__

São mais rápidos, repetitivos, ideais para testes de regrssão e cenários repetitivos.

























