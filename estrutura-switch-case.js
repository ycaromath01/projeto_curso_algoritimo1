//BOTÃO DE AÇÃO NO BODY DO INDEX <button onclick="acaoBotao()">INICIAR AÇÃO</button>
function acaoBotao() {
    var valor01, valor02, resultado, operacao //VARIAVEL DENTRO DA FUNCAO PARA FUNCIONAR O BOTAO
    valor01 = prompt("digite o primeiro numero: ")
    operacao = prompt("Digite a operação: EX: +, -, *, /")
    valor02 = prompt("Digite o segundo valor: ")
switch (operacao) {
    case "+":
       resultado = parseInt( valor01 ) + parseInt( valor02 )
        break;
    case "-":
        resultado = parseInt( valor01 ) - parseInt( valor02 )
        break;
    case "*":
        resultado = parseInt( valor01 ) * parseInt( valor02 )
        break;
    case "/":
        resultado = parseInt( valor01 ) / parseInt( valor02 )
        break;
}

//ligar a interação do html com o js 
document.getElementById("paragrafo").innerText = resultado

/*
if ( operacao == "+"){
    resultado = parseInt(valor01) + parseInt(valor02)
}else if(operacao == "-"){
    resultado = parseInt(valor01) - parseInt(valor02)
    }else if(operacao == "*"){
    resultado = parseInt(valor01) * parseInt(valor02)
}else if(operacao == "/"){
    resultado = parseInt(valor01) / parseInt(valor02)
}*/



    
}
