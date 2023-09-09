//Exercício 05

//Declare um array com alguns números inteiros quaisquer.
//Depois, percorra este array, filtrando apenas os números **pares** e os armazenando em um novo array.
//Ao final, imprima a variável do array contendo apenas os números pares no console.

const numeros = [1, 4, 11, 6, 5, 12, 15, 88, 112, 115, 114];
let numerosPares = [];

for (let numero of numeros) {
    if (numero % 2 === 0) {
        numerosPares.push(numero)
    }

}

console.log(numerosPares)

