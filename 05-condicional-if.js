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

console.log("**** IF/ELSE ****")
// if/else
if (saldo >= passagem) {
    console.log("Passagem liberada");
    console.log("Foram debitados R$5,30 do seu saldo");
} else {
    console.log(`Você tem apenas ${saldo}, você não tem saldo suficiente`);
}

console.log("-----------------")

let chuva = true;

if (chuva === true) {
    console.log("Atenção! Está chovendo, leve um guarda-chuva.")
} else {
    console.log("Hoje não está chovendo")
}





