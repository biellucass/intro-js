// Um array é uma estrutura de dados utilizado para armazenar uma coleção (lista) de valores dentro de uma única variavel

let aluno1 = "Luis";
let aluno2 = "Muliro";
let aluno3 = "Leila";
let aluno4 = "Sacuma";
let aluno5 = "Guilherme";
let aluno6 = "Clara";

// Organizando estrutura com Arrays
// A estrutura de um array é representada por []
const alunos = ["Luis", "Muliro", "Leila", "Sacuma", "Guilherme", "Clarinha"]

console.log(alunos);

//Acessando informações de um Array
console.log(alunos[0]);
console.log(alunos[3]);

//Acessando um elemento sem valor definido
console.log(alunos[7]);

// Descobrindo o tamanho
console.log("O tamanho do Array é: ", alunos.length);

//Iterando sobre array

for (let index = 0; index < alunos.length; index++) {
const element = alunos[index];
 
console.log(element);
}

// Percorrendo array - For/of
for(let aluno of alunos) {
    console.log(aluno);
}
