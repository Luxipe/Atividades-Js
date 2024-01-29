// comentário de uma linha

/*
 comentário de múltiplas linhas
*/

// Declarando variáveis
let nome ="joao";
let idade =25;

// Estruturas de controle (if, else)
if (idade>= 18) {
    console.log(nome + " é maior de idade.");
} else {
    console.log(nome + " é menor de idade.");
}

// loops (for)
for (let i = 0; i < 6; i++) {
    console.log("Número; " + i);
}

// Funções
function saudacao() {
    console.log("Olá, " + nome + "!");
}

// Chamando a função
saudacao();

let frutas = ["maçã", "banana", "laranja"];
frutas.push("morango"); // Adiciona um elemento ao final do array

