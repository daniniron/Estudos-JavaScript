const cliente = {
    nome: "Daniel",
    idade:27,
    cpf: "123.123.123.80",
    email: "daniel.san.brito@live.com"
}

cliente.dependente = {
        nome: "Amanda",
        idade:25,
        cpf: "321.321.321.80",
        parentesco : "Esposa"

}


console.log(cliente)

cliente.dependente.nome = "Amanda Santos"

console.log(cliente)