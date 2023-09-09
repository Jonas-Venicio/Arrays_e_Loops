//Exercício 06:

// Soma dos pares
//Declare um array com alguns números inteiros quaisquer.
//Depois, percorra este array e calcule a **soma dos números 
//pares** presentes nesse array.

const numeros = [3, 4, 7, 8, 1, 6, 10, 5];
let somaPares = 0;

for (let numero of numeros) {
    if (numero % 2 === 0) {
        somaPares += numero;
    }
}

console.log(somaPares);