/* Aula e Exercícios da aula 02 - JS Origamid */

/* Backup Info: https://www.w3schools.com/js/js_datatypes.asp */

// Tipos de dados

var nome = "André"; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

// Verificar o tipo de Dado

var nome = "André";
console.log(typeof nome);
// retorna string

var idade = 28; // Number

/* *************************************************************************************** */

/* Exercícios de JavaScript - Tipos de Dados */

// Declare uma variável contendo uma string
var nome = "Meu nome é Kátia";

// Declare uma variável contendo um número dentro de uma string
var idade = "Eu tenho 35 anos";
var ano = "2018";
// Declare uma variável com a sua idade
var age = 35;

// Declare duas variáveis, uma com seu nome
var meuNome = "Katia";

// e outra com seu sobrenome e some as mesmas
var sobrenome = "Reis";

var nomeCompleto = meuNome + " " + sobrenome;
//ou
var fullname = `${meuNome} ${sobrenome}`;

console.log(nomeCompleto);
console.log(fullname);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);

//ou

var verificarTipo = typeof nomeCompleto;

console.log(verificarTipo);
