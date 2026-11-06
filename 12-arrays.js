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

alunos.forEach(()=>{
    console.log(alunos)
})

// Métodos importantes dos arrays
const frutas = ["Banana", "Maça", "Pêra", "Manga", "Uva"];

// 1 - includes(verifica se um elemento existe)

console.log(frutas.includes("Goiaba"));
console.log(frutas.includes("Banana"));

// 2 - IndexOf(verifica a posição de um elemento)

console.log(frutas.indexOf("Goiaba"));
console.log(frutas.indexOf("Pêra"));

// 3 - find(Encontrar um elemento)
// O find retorna o primeiro elemento que atende a condição especificada.
const notas = [10, 5, 7, 8, 25, 4, 1, 14];

const resultado = notas.find((nota)=>{
    return nota > 7
})
console.log(resultado);

// 4 - filter()
// Diferente do find, o filter retorna todos os elementos que atendem uma determinada condição.
console.log("Notas aprovadas:")
const aprovados = notas.filter((nota)=>{
    return nota >= 7
})

console.log(aprovados);

// filter com retorno implicito
console.log("Notas reprovadas:")
const reprovados = notas.filter(nota => nota < 7);

console.log(reprovados);

// Manipulando um Array

