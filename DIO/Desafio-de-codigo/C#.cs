using System;

class Program {

  static string ValidarDados(string nome, int idade, string email) {
    string mensagem;
    if (idade < 0 || idade > 120) 
    {
      mensagem = "Dados Invalidos: Idade fora do intervalo permitido!";
    } 
    else if (!email.Contains("@") || !email.Contains(".")) 
    {
      mensagem = "Dados Invalidos: E-mail no formato incorreto!";
    } 
    else 
    {
      mensagem = "Dados Validados com Sucesso!";
    }
    return mensagem;
  }

  static void Main() {
    // Solicitar entrada do usuário
    string nome = Console.ReadLine();
    int idade = int.Parse(Console.ReadLine());
    string email = Console.ReadLine();

    // Chamar a função ValidarDados com os valores inseridos pelo usuário
    string resultado = ValidarDados(nome, idade, email);

    // Exibir o resultado
    Console.WriteLine(resultado);
  }
}