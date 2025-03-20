#Bootcamp QAautomation
#Automação MOBILE com Maestro

Maestro:
"O Maestro framework é uma ferramenta open-source para automação de testes em aplicativos mobile (Android e iOS). Ele foi desenvolvido para ser uma alternativa mais simples e rápida ao APpium, com foco em testes e2e."

Principais caracteristicas:
	Fácil configuração: Testes são escritos em YAML.
	Execução rápida: Testes executados de forma mais leve do que em framework como Appium.
	Cross plataform: Suporta tanto Android quando iOS.
	Hot reload: Ajustes nos testes em tempo real sem precisar reiniciar.
	Suporte a fluxos de navegação:  Permite definir flows de interação de usuário para testar jornadas completas.

Vantagens do Maestro sobre Appium:
	Menos dependências e mais leve.
	Mais rápido para testes.
	Sintaxe declarativa e intuitiva (YAML).
	Suporte nativo a animações e transições.

Mão na massa:
	https://docs.maestro.dev

	Pré requisitos:
	Node
	Android studio
	VSCode
	Java JDK Kit 11

	Maestro
	curl -fssSL "https://get.maestro.mobile.de" | bash

	Criar uma pasta em documents e extrair o zip dentro:
	https://github.com/mobile-dev-inc/maestro/releases/latest/download/maestro.zip

	Rodar o comando:
	setx PATH "%PATH%;C:\Users\jake\maestro\bin"

	Baixar o projeto Maestro:
	maestro download-samples

	Arquivo/Projeto criado:
	//Cabeçalho dos arquivos .yaml
	appId: "ID do app"
	---
	- launchAPP
	.
	.
	.

	//Comando para rodar o projeto de teste no terminal 
	maestro test "nome do arquivo.yaml"

Boas práticas:
	Sempre utilizar os ids (quando tiver) e validar Texto dos campos ou botões no "assert".