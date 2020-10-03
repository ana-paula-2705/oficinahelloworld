console.log("entrei")


var titulo = document.querySelector("h1")
console.log(titulo)
var subtitulo = document.querySelector("h2")
console.log(subtitulo)

var botao = document.querySelector("button")
console.log(botao)

var input = document.querySelector("input")
console.log(input)

function clicar(){
    event.preventDefault()
    subtitulo.innerHTML = input.value
}