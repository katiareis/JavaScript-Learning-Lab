/* Aula de JavaScript - Digital Innovation One 

alert
variaveis
console.log
array e dicionários
laços de repetição: while e for
push, pop e length
reverse array
toString para array
join para array
variavel global / local
replace
toLowerCase
toUpperCase
redirecionar para outra página
date
function
******************************************

var nome = "Kátia Reis";
var n1 = 2
var n2 = 5
var frase = "Japão é o melhor país do mundo!"

//alert("Bem vindo, " + nome) // Exemplo de JS em arquivo separado
//alert(nome + " tem " + n2 + " anos");

console.log(n1 + n2)
console.log(nome);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

console.log(n1 * n2);

var lista = ["maça", "pera", "laranja"];
console.log(lista[1]);

lista.push("uva", "morango"); // inclui itens numa lista

lista.pop(); // remove sempre o último item da lista
console.log(lista);

console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - ")); // Transforma em string e acrescenta algo entre os itens. Neste caso " - "


// Dicionários
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);


//Lista de dicionários

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]

console.log(frutas)
alert(frutas[1].nome);


// Condicionais

var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    alert("Maior de idade!")
}else{
    alert("Menor de idade!")
};



// Laços de Repetição - While

var count = 0;
while (count <=5){
    console.log(count);
    count = count + 1; // ou count++;
};



// Laços de Repetição - For

var count;
for(count=0; count<=5; count++){
    console.log(count);
};


// Date

var d = new Date();
alert(d.getMonth()+1); // vai mostrar apenas o mês. Sem o mais 1, ele mostra o mês anterior
alert(d.getHours());

console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));

DOM é o modelo de padrão e interface que define propriedades, métodos e eventos de elementos.


// Functions

function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);}

alert(setReplace("A Maria é linda!", "Maria", "Ana"));


// Variável global e local

var validar = 0; // variável global

function validaIdade (idade){
    if (idade >= 18) { // se inserir a variável dentro da função, ela não funcionará corretamente
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?")
validaIdade(idade)
console.log(validar);


function cliqueAqui(){
    alert("Obrigado por clicar!");
}

*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}

function novaPagina(){
    window.open("https://digitalinnovation.one/sign-in");
    // window.location.href = "https://www.linkedin.com/feed/"; // Abre na mesma página
}
