/*
numero, fatorial, contador: inteiro

Inicio
    escreva("Digite o numero Para calcular o fatorial.")
     leia(numero)
     fatorial := 1
     para contador de 1 ate numero faca
          fatorial := fatorial * contador
     fimpara
     escreva("O fatorial de ", numero," é: ", fatorial)
     */
function acaoBotao() {
    var numero, fatorial
    fatorial = 1
    numero = prompt("Digite o numero para calcular o fatorial: ")
    //estrutura repetição
    for ( var contador = 1; contador <= numero; contador++ ) {
     //formula fatorial
    fatorial = fatorial * contador
     
    }
    //ligar a interação do html com o js 
document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}