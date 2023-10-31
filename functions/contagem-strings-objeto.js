// Criei uma função onde recebe como parâmetro um objeto

const contagemStringsObjeto = (objeto) => {

    // Realizei a criação de um objeto vazio para incluir os valores que são strings e mostrar quantas vezes ele aparece no objeto.
    const objetoComContagem = {}

    //Criei um laço de repetição "for...in" para interagir com os valores do objeto mandando como argumento.
    for (const valor in objeto) {

        //Aqui ele realiza uma verificação utilizando "typeof" para realizar a comparação e verificar se o valor que estamos passando no objeto é do tipo "string".
        //Utilizei colchetes para verificar o valor das chave de forma dinâmica.
        if (typeof objeto[valor] === 'string') {

            // Armazenei o valor da chave que estamos passando como uma nova chave que vai ser passado para o objeto vazio que criei.
            const chave = objeto[valor]

            // Realizei o ternário para verificar se essa chave já existe no objeto que criei.
            // Caso não exista será feita a criação de uma nova chave nesse objeto com valor de 1
            // Caso exista ele irá atribuir mais 1 ao valor desta chave.
            objetoComContagem[chave] ? objetoComContagem[chave] += 1 : objetoComContagem[chave] = 1
        }
    }

    return objetoComContagem

}

//Teste 

const objetoTeste = {
    Nome: "Caio",
    Sobrenome: "Silva",
    Idade: 25,
    NomePai: "Jorge",
    SobrenomePai: "Silva",
    IdadePai: 55,
    NomeMae: "Julia",
    SobrenomeMãe: "Silva",
    IdadeMae: 54,
}

const resultado = contagemStringsObjeto(objetoTeste)

console.log(resultado)
