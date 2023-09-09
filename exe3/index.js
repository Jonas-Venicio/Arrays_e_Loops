//Encotrando o 10

const numeros = [55, 14, 11, 1, 10];
let resposta = -1;
let index = 0;
while (index < numeros.length) {
    index++
    if (numeros[index] === 5) {
        resposta = index;
    }
}
console.log(resposta);

/*const numeros = [54, 22, 14, 1, 1, 1, 284];

let resposta = -1;
for (let index = 0; index < numeros.length; index++) {
    let numero = numeros[index]
    if (numero === 10) {
        resposta = index;
        break
    }
}
console.log(resposta);
*/
