// new ContaCorrente
public class ContaCorrente extends Conta implements Tributavel {

	public ContaCorrente(int agencia, int numero) {
		super(agencia, numero);
	}

	@Override
	public boolean saca(double valor) {
		System.out.println("Taxa para transa��es em conta corrente: 20 centavos");
		double valorASacar = valor + 0.20;

		return super.saca(valorASacar);
	}

		@Override
		public void deposita(double valor) {
			super.saldo += valor;
			
		}
		
		@Override
		public double getValorImposto() {
			
			return super.saldo * 0.01;
		}
}
