// var frutas = [
//     "maça", 
//     "maracuja", 
//     "laranja"
// ];

// console.log(frutas)
// Acessar item especifico da lista
// console.log(frutas[0])

// if(frutas[0] == 'maça') {
//     console.log(true)
// } else {
//     console.log(false)
// }

// function nomeFuncao(nome, idade) {
//     console.log("Nome: " + nome + " - Idade: " + idade)
// }

// nomeFuncao("Amora", 1)

// frutas.forEach(function(fruta, indice) {
//     console.log(indice, fruta)
// })

/** 
 * Objetos
 */
// var pessoa = {
//     nome: "Aurora",
//     email: "aurora@tech.com.br",
//     idade: 6,
// };

// console.log(pessoa['nome'])
// console.log(pessoa.idade)
/** 
 * Capturando elementos
 */

const tituloElemento = document.getElementById("titulo")
// const h1Elemento = document.querySelector("h1")
// const containerElemento = document.querySelector(".container")

// console.log(containerElemento)

// tituloElemento.style.color = "red"
// tituloElemento.style.fontSize = "64px"
// tituloElemento.innerHTML = "<strong>Testando....</strong>"
// tituloElemento.innerText = "Testando...."

var tarefas = [];

const buttonElemento = document.querySelector('button')
const inputElemento = document.querySelector("input")
const listaElemento = document.querySelector("ul")

// tarefas.push("item 1")
// console.log(tarefas)
// listaElemento.innerHTML = '<li class="list-group-item">'+ valor +'</li>'

buttonElemento.addEventListener("click", function() {
    // console.log("clicou")
    let valor = inputElemento.value;

    tarefas.push(valor)

    let itemElemento = document.createElement("li")
    itemElemento.innerText = valor;
    itemElemento.classList.add("list-group-item")

    listaElemento.appendChild(itemElemento)

    inputElemento.value = ""

})