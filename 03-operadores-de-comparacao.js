// Os operadores de comparação servem para comparar dois valores e verificar se uma determinada condição é verdadeira ou falsa

// DICA: No JavaScript, o resultado de uma comparação é sempre um valor booleano, ou seja, true ou false.

// 1 - === Igualdade estrita
// O operador de igualdade estrita verifica se dois valores são iguais tanto em tipo de dado e valor.

console.log(10 === 10); // true
console.log(10 === 20); // false
console.log(10 === '10'); // false
console.log("--------------");

// 2 - == Igualdade não estrita
// O operador de igualdade não estrita também comprara valores, mas, de forma resumida, observa o VALOR da comparação ignorando o tipo de dado.

//CURIOSIDADE: Nesse caso, por debaixo dos panos, o JavaScript faz uma conversão de tipos de comparar.
console.log(10 == 10); // true
console.log(10 == 20); // false
console.log(10 == '10'); // true
console.log("--------------");

// 3 - !== Diferença estrita
// Tanto o oporedor !== quanto o != verificam se os valores são diferentes. Porém no caso do operador de !==, ele verifica também o tipo de dado. 

console.log(5 !== 3);
console.log(5 !== 5);
console.log(5 !== "5");
console.log("--------------");

// 4 - != Diferença não estrita
// No caso desse operador, ele verifica apenas o valor, e não o tipo de dado.

console.log(5 != "5");
console.log(5 != 3);
console.log(5 != 5);
console.log("--------------");

// 5 - > maior que
// Compara se um valor é maior que o outro  

console.log(5 > 3);
console.log(5 > 8);
console.log(5 > 5);
console.log("--------------");

// 6 - < menor que
// Compara se um valor é menor que o outro.

console.log(5 < 3);
console.log(5 < 8);
console.log(5 < 5);
console.log("--------------");

// 7 - >= maior ou igual
// Compara se o valor é maior ou igual.

const nota = 5;

console.log(nota >= 3);
console.log(nota >= 8);
console.log(nota >= 5);
console.log("--------------");

// 8 - <= maior ou igual
// Compara se o valor é maior ou igual.

console.log(nota <= 3);
console.log(nota <= 8);
console.log(nota <= 5);
console.log("--------------");




