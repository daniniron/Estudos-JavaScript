const listaCPFs = ["12331231231","1231231312312","4234234242"]

const cliente = {
    nome: "Daniel",
    idade:27,
    cpf: "123.123.123.80",
    email: "daniel.san.brito@live.com"
}

const chaves = ["nome", "idade", "cpf","email"];
console.log(cliente[chaves[0]]);

chaves.forEach(info=>console.log(cliente[info]))