function acaoBotao() {
    var nome, idade, limite, contador
   
 limite = prompt("digite a quantidade de vezes que vai ser verificado a idade: ")
 //var recebe 0 para o usuario adicionar a quantidade de repeticao na var limite ser maior que 0 para funcionar
 contador = 0
while(contador < limite){
    nome = prompt("digite o nome da pessoa: ")
    idade = prompt("digite a idade do " + nome)
    if ( idade > 18 )
    //ligar a interação do html com o js 
        document.getElementById("paragrafo").innerText = nome + "voçe é maior de idade! " 
    else
        document.getElementById("paragrafo").innerText = nome + "voçe é menor de idade! " 
        contador++ 
}
    
}
