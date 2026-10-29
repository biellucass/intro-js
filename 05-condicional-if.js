// Estruturas condicionais permitem que o progama tome decisões com base em determinadas condições(regras)

// if (se) - Executa um bloco de código se uma condição for verdadeira

/*
    estrutura de um if

    if(condição){
        bloco de código que será executado caso a condição seja verdadeira
    }
*/

const saldo = 6.30;
const passagem = 5.30;

/* 
    estrutura if/else

    if (condição) {
        bloco de código que será executado 
        caso a condição seja verdadeira
    } else {
        bloco de código que será executado caso a condição seja falsa
    }
*/

console.log("**** IF/ELSE ****");

// if/else composto
if (saldo >= passagem) {
    console.log("Passagem liberada");
    console.log("Foram debitados R$5,30 do seu saldo");
} else {
    console.log(`Você tem apenas ${saldo}, você não tem saldo suficiente`);
}

console.log("-----------------");

let chuva = true;

if (chuva === true) {
    console.log("Atenção! Está chovendo, leve um guarda-chuva.");
} else {
    console.log("Hoje não está chovendo");
}
console.log("-----------------");

// if... else if - encadeado

/* 
    estrutura

    if(condição) {
        bloco de código que será executado caso a condição for verdadeira
    } else if(condição) {
        bloco de código que será executado caso a condição anterior seja falsa
    } else{
        bloco de código que será executado caso todas as condições sejam falsas
    }
*/

console.log("**** IF/ELSE - encadeado ****");

const nota = 7;

if (nota >= 9) {
    console.log(`Sua nota foi ${nota}`);
    console.log("Exelente!");
} else if (nota >= 6) {
    console.log(`Sua nota foi ${nota}`);
    console.log("Aprovado!");
} else if (nota >= 4) {
    console.log(`Sua nota foi ${nota}`);
    console.log("Em recuperação!");
} else {
    console.log(`Sua nota foi ${nota}`);
    console.log("Reprovado!")
}

// Aprimorando as condicionais
console.log("**** CONDICIONAIS LÓGICAS ****");

const idade = 18;
const temIngresso = true;

// Operador lógico && - AND(E)

if (idade >= 18 && temIngresso) {
    console.log("Entrada permitida");
} else {
    console.log ("Entrada não permitida.")
}
console.log("-----------------");

// Operador lógico || - OR(Ou)
console.log("**** || - OR(ou) ****");

const ehAdmin = false;
const ehModerador = false;

if (ehAdmin || ehModerador) {
    console.log("Acesso ao painel");
} else {
    console.log("Acesso não permitido");
}

// Operador lógico ! - NOT (não)
    console.log("**** ! - NOT(não) ****");

    // Inverte o valor lógico
    console.log(!ehAdmin)

    const estaLogado = false;
    if(!estaLogado){
        console.log("Faça login para continuar.")
    }

    const nome = "";

    if(!nome){
        console.log("Preencha seu nome");
    }

    const aceitouTermos = false
    //se não aceitouTermos, então...
    if(!aceitouTermos){
        console.log("Para continuar você precisa aceitar os termos.")
}



