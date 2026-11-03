// Funções são blocos de código criadas para executar uma tarefa específica.

/*
    estrutura de uma função

    function nomeDaFuncao() {
        bloco de código que será executado
    }
*/

//Exemplo básico de uma função

function darBoasVindas(){
    console.log("Olá, Seja bem vindo!!");
}

// Ativando/invocando/chamando a função
darBoasVindas();

// Funções com parâmetros e argumentos
function fazerSuco(fruta){
    console.log(`Preparando o suco de ${fruta}...`)
}

fazerSuco("laranja");
fazerSuco("maçã")
fazerSuco("Abacate")

function soma(a, b){

    let resultado = a + b;
    console.log(resultado);
}

soma(23, 24);
soma(37, 30);

// Casos bizarrso
soma("Gabriel", "Lucas");
soma("Gabriel", 10);
soma("Gabriel", null);
soma(10, null);
soma(10, undefined);
soma([10], {undefined});

//apresentando pessoas
function apresentarPessoa(nome, sobrenome){
    // O sinal de + pode ser utilizado para concatenar informações
    // contatenar = unir/juntar dados
    console.log("Olá, meu nome é " + nome + " " + sobrenome + " .")
}

apresentarPessoa("Gabriel", "Lucas");

//Funções com retorno
console.log("--- Funções com retorno ---");
function multiplicar(a, b){
    return a * b;
}

const resultado = multiplicar(3,5);
console.log(resultado);