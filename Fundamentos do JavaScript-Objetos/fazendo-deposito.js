const cliente = {
    nome: "Daniel",
    idade:27,
    cpf: "123.123.123.80",
    email: "daniel.san.brito@live.com", 
    dependentes : [
        {
            nome: "Amanda",
            idade:25,
            cpf: "321.321.321.80",
            parentesco : "Esposa"
        },
        {
            nome: "Alice",
            idade: 15,
            cpf: "234.234.234.23",
            parentesco: "filha"        
        }
    ],
    saldo:100,

    deposita: function(valor)
    {
this.saldo +=valor
    }

}

console.log(cliente.saldo)
cliente.deposita(30)
console.log(cliente.saldo)