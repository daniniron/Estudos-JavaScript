const cliente = {
    nome: "Daniel",
    idade:27,
    cpf: "123.123.123.80",
    email: "daniel.san.brito@live.com", 
    dependentes : [{
        nome: "Amanda",
        idade:25,
        cpf: "321.321.321.80",
        parentesco : "Esposa"
    }]
}

cliente.dependentes.push({

        nome: "Alice",
        idade: 15,
        cpf: "234.234.234.23",
        parentesco: "filha"
});


//console.log(cliente);



const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.idade === 15)

console.log(filhaMaisNova[0].nome)