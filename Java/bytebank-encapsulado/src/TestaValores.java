
public class TestaValores {

	public static void main(String[] args) {
		Conta conta = new Conta(1337, 24226);
		
		System.out.println(conta.getAgencia());

		Conta conta2 = new Conta(1337, 24227);
		
		System.out.println(conta2.getAgencia());
		
		Conta conta3 = new Conta(1337, 24228);
		
		System.out.println(Conta.getTotal());
		
		Conta conta4 = new Conta(1337, 24228);
	}

}
