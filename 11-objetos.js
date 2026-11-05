// Os objetos dão uma estrutura de dados que nos permitem armexar várias informações relacionadas dentro de uma ÚNICA variavel

/* 
    estrutura de um objeto

    const objeto = {
        key: value;
        chave: valor;
        propriedade: valor,
        outraPropriedade: outroValor
    }
*/

//Exemplo: Criando informações de um aluno
let nome = "Samuca";
let idade = 19;
let curso = "JavaScript";
let email = "samuca@gameplay.com";
let matriculado = true;

// Organizando estruturas com objetos
const aluno = {
    nome: "Samuca",
    idade: 19,
    curso: "JavaScript",
    email: "Samuca@gameplay.com",
    matriculado: true
}

// Exibindo o objeto completo
console.log(aluno);

// Acessando informações especificas
// com o ponto final . (dot notation)
console.log(aluno.nome);
console.log(aluno.email);

// com o colchete [] - (bracket notation)
console.log(aluno["curso"]);
console.log(aluno["idade"]);

//Alterando informações de um objeto
aluno.curso = "React";
console.log("aluno");

// Adicionando propriedades ao objeto
aluno.nota = 9.5;
console.log(aluno);

// Removendo propriedades do objeto
delete aluno.nota

console.log(aluno);

// objetos aninhados (Objeto dentro de objeto)
const pessoa = {
    nome: "Alex",
    sobrenome: "Furukawa",
    idade: 18,

    endereco: {
        bairro: "Carrão",
        estado: "SP",
        cidade: "São Paulo",
        cep: "00000-000",
        numero: 67,
        rua: "Dos bobos"
    }
}

console.log(pessoa.endereco.cep);

// Objetos com funções(métodos)
const cachorro = {
    //propriedades
    nome: "Renato",
    idade: 3,
    raça: "Husky Siberiano",

    // métodos
    latir: function () {
        console.log("au au");
    }
}

cachorro.latir()

// Exemplos comuns
const produto = {
    tela: "Amoled 16pol",
    armazenamento: "SSD 1TB",
    Processador: "Ryzen 5500U",
    memoriaRam: "16GB",
    bateria: "",
    preco: 3500,
    estoque: 10,
    disponivel: true,
}

const clima = {
    cidade: "São Paulo",
    temperatura: 24,
    umidade: 70,
    vento: 13,
}

console.log(`Temperatura: ${clima.temperatura.toFixed(2)} C°`)

// Retornando apenas AS CHAVES do objeto trabalhado acima
console.log(Object.keys(clima));

// Retornando apenas os VALORES do objeto
console.log(Object.values(clima));

// Retornando pares de chave e valor
console.log(Object.entries(clima));



// Iterando sobre um objeto
// Acessando chaves
for (const key in produto) {
    console.log(key)
}

// Acessando valores
for (const banana in produto) {
    const element = produto[banana];

    console.log(element);
}
