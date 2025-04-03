function validarDados(nome, idade, email) {
	let mensagem;
	if (idade < 0 || idade > 120) {
		mensagem = "Dados Invalidos: Idade fora do intervalo permitido!";
	} else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
		mensagem = "Dados Invalidos: E-mail no formato incorreto!";
	} else {
		mensagem = "Dados Validados com Sucesso!";
	}
	return mensagem;
}

// Solicitar entrada do usuário
const nome = gets()
const idade = parseInt(gets());
const email = gets();

// Chamar a função validarDados com os valores inseridos pelo usuário
const resultado = validarDados(nome, idade, email);

// Exibir o resultado
print(resultado);