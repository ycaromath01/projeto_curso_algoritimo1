var nome, nota01, nota02, media;

nome = prompt("Digite o Seu Nome")
nota01 = prompt("Digite a Sua Nota 01")
nota02 = prompt("Digita a Sua Nota 02")

media = (parseInt (nota01) + parseInt (nota02)) / 2;

if (media >= 50)
alert ("aprovado" + nome)
 else
 alert ("reprovado" + nome)