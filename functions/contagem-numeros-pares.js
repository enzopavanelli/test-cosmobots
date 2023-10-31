// Criei uma função onde recebe como parâmetro um array de números

const contagemNumerosPares = (ArrayDeNumeros) => {

    // Para realização da contagem números pares criei uma váriavel "let" que significa "let it change" com valor 0 (início da nossa contagem).
    // Ela é declarada assim pois ela uma váriavel que vai ser mudada constantemente.
    let somaNumerosPares = 0

    // Criei um laço de repetição com método "length" que percorre todo array para validar cada índice e verificar se é um número par ou não.
    for (let i = 0; i < ArrayDeNumeros.length; i++) {

        // Aqui ele valida se é um número par com operador "%", que basicamente verifica se o número é divisível por 2 o que categoriza um número par.
        // O operador de "%" verifica o resto da operação de divisão, o que significa que se o número estiver com resto 0 nessa condição ele seria divisível por 2.
        if (ArrayDeNumeros[i] % 2 === 0) {
    
            //Caso passe nessa condição ele adiciona o valor do número para na nossa váriavel de soma.
            somaNumerosPares += ArrayDeNumeros[i]
        }
    }

    // Aqui ele retorna o valor da soma dos números pares.
    return somaNumerosPares
} 


//Teste

const numeros = [-1, -2, 3, 4, 234, 10]

const resultado = contagemNumerosPares(numeros)

console.log( "Resultado da soma de todos os números pares: " + resultado)