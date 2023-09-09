// Exercício 07

// Filtrando nomes com a letra A
//Declare um array com alguns nomes quaisquer.
//Depois, crie um novo array a partir do primeiro que contenha apenas os 
//nomes que começam com a letra "A" ou "a"(maiúscula ou minúscula).
//Ao final, imprima a variável que guarda o array.


const nomes = ["Ana", "Joana", "Carlos", "Antonio", "anita", "Jonas"];
let novosNomescomA = [];

for (let nome of nomes) {
    const inicialA = nome[0];

    if (inicialA === "A" || inicialA === 'a') {
        novosNomescomA.push(nome);
    }
}

console.log(novosNomescomA)