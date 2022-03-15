// parametros de função

function soma(num1, num2)
    {
        return num1 + num2;
    }

    console.log(soma(2,2));


// parametro x argumento;

//ordem dos paramentos

function nomeIdade(nome, idade)
    {
        return ` meu nome é ${nome} e minha idade ${idade}`
    }

    console.log(nomeIdade("Daniel", 28))

    function multiplica (num1 = 1, num2 = 1 )
    {
        return num1* num2
    }

    console.log(multiplica(soma(4,5), soma(3,3) ))