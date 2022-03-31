
// gerente e um funcionario, gerente herda da class funcionario
public class Designer extends Funcionario {


	public double getBonificacao() {
		System.out.println("chamar Designer");
		return 200;
	}

}