const letras = ["a", "A", "b", "E", "e"];
let quantidade = 0;

for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        quantidade++;
    }
}


if (quantidade === 0) {
    console.log("Nenhuma  letra \"E\" ou \"e\" foi encontrada");
} else if (quantidade === 1) {
    console.log(`Foram encontradas 2 letras E ou e `);
} else {
    console.log(`Foram encontrados ${quantidade} letras E ou e`)
}

