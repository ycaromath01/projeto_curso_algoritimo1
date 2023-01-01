function acaoBotao() {
    var saiirloop, valor01, valor02
    //repita funcao
    //faça
    do {
        valor01 = prompt("digite o primeiro valor: ")
        valor02 = prompt("digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado" + (parseInt(valor01) + parseInt(valor02))
        saiirloop = prompt("deseja sair? S/N ")
    
    //enqunto 
    } while(saiirloop == "N")

    /*var senha = ''

  do{
   senha = prompt("Digite sua senha: ")

   if(senha=='2112js')
   document.getElementById("paragrafo").innerText = "Entrando no sistema..."
   else
   document.getElementById("paragrafo").innerText = "Senha invalida, tente novamente!"
  }while(senha !='2112js')*/
    
}

/*let result = ''
let i = 0

do {
  i = i + 1
  result = result + i
} while (i < 5)

console.log(result)
*/