
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