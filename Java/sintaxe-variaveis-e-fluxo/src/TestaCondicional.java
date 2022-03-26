
public class TestaCondicional {
	public static void main(String[] args) {
		System.out.println("testando condicionais");

		int idade = 16;
		int quantidade = 2;
		if (idade >= 18) {
			System.out.println("voce tem mais de 18 anos");
			System.out.println("Seja bem Vindo");
		} else {
			if (quantidade >= 2) {
				System.out.println("vece nao tem 18, mas pode entrar, " + idade + "pois esta acompanhado");
			} else {
				System.out.println("infelizmente voce não pode entrar");
			}
		}
	}

}
