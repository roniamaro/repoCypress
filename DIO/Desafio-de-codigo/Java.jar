import java.util.Scanner;

public class Main {

  // Função para validar os dados
  public static String validarDados(String nome, int idade, String email) {
    String mensagem;
    if (idade < 0 || idade > 120) {
      mensagem = "Dados Invalidos: Idade fora do intervalo permitido!";
    } else if (!email.contains("@") || !email.contains(".")) {
      mensagem = "Dados Invalidos: E-mail no formato incorreto!";
    } else {
      mensagem = "Dados Validados com Sucesso!";
    }
    return mensagem;
  }

  public static void main(String[] args) {

    try (Scanner scanner = new Scanner(System.in)) {

      // Variáveis para armazenar os dados
      String nome;
      int idade;
      String email;

      // Solicitar entrada do usuário
      nome = scanner.nextLine();
      idade = scanner.nextInt();
      scanner.nextLine();
      email = scanner.nextLine();

      // Chamar a função validarDados com os valores inseridos pelo usuário
      String resultado = validarDados(nome, idade, email);

      // Exibir o resultado
      System.out.println(resultado);
    }
  }
}