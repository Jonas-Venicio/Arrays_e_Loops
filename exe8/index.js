//Exercício 08:
//Encontrando o maior
//Declare um array com alguns números quaisquer.
//Depois, faça um programa que encontre o maior número desse array e o imprima no console.

const listaDeNumeros = [2, 4, 3, 6];
let maiorNumeroDaLista = listaDeNumeros[0];

//percorre o array
//verificar se é o maior número do array
//se for imprimir na tela

for (let numero of listaDeNumeros) {
    if (numero > maiorNumeroDaLista) {
        maiorNumeroDaLista = numero
    }
}

console.log(maiorNumeroDaLista)