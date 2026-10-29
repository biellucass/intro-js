// laços de repetição (loops) são estruturas que nos permitem executar um bloco de código várias vezes sem precisar escrever o mesmo código repetidamente

// laço for
//


//Exemplo básico de for
for (let num = 1; num <= 10; num++) {
    console.log(num);
}

//Exemplo básico de contagem de valores
for (let index = 0; index < 20; index++) {
    console.log(index);
}

// Exemplo básico de atualização de variável
for (let i = 1; i < 20; i += 2) {
    console.log(i);
}

console.log("TABUADA DO 6");
for (let i = 0; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
}

//Exemplo de tabuada avançada
const numTabuada = prompt("Digite um número da tabuada que deseja ver:");

console.log(numTabuada);

for (let num = 0; num <= 10; num++) {

    const resTabuada = numTabuada * num;
    const msgTabuada = `${numTabuada} x ${num} = ${resTabuada}`;
    console.log(msgTabuada);
}