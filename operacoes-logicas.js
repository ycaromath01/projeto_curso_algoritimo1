



/*      Disjuncao exclusiva */
   var nome, nota01, nota02, media, passou;

   passou = false;

nome = prompt("Digite o Seu Nome")
nota01 = prompt("Digite a Sua Nota 01")
nota02 = prompt("Digita a Sua Nota 02")

media = (parseInt (nota01) + parseInt (nota02)) / 2;

if (media >= 50)
    passou = true;

if (passou && (media >= 70 && media <= 90))
    alert ("aprovado" + nome)
else
    alert ("reprovado" + nome)
    





    /*var nome, nota01, nota02, media, passou;

   passou = false;

nome = prompt("Digite o Seu Nome")
nota01 = prompt("Digite a Sua Nota 01")
nota02 = prompt("Digita a Sua Nota 02")

media = (parseInt (nota01) + parseInt (nota02)) / 2;

if (media >= 50)
    passou = true;

if (passou)
    alert ("aprovado" + nome)
else
    alert ("reprovado" + nome)
    */





    /*      #### NEGACAO ####
    var nome, nota01, nota02, media, passou;

   passou = false;

nome = prompt("Digite o Seu Nome")
nota01 = prompt("Digite a Sua Nota 01")
nota02 = prompt("Digita a Sua Nota 02")

media = (parseInt (nota01) + parseInt (nota02)) / 2;

if (media >= 50)
    passou = true;

if (!passou)
    alert ("aprovado" + nome)
else
    alert ("reprovado" + nome)
    */





    /*    COJUCAO (AS DUAS TEM QUE SER VERDADEIRAS)
    var nome, nota01, nota02, media, passou;

    passou = false;
 
 nome = prompt("Digite o Seu Nome")
 nota01 = prompt("Digite a Sua Nota 01")
 nota02 = prompt("Digita a Sua Nota 02")
 
 media = (parseInt (nota01) + parseInt (nota02)) / 2;
 
 if (media >= 50)
     passou = true;
 
 if (passou && media >= 50)
     alert ("aprovado" + nome)
 else
     alert ("reprovado" + nome)
     */






     /*  DISJUNCAO (APENAS UMA VERDADEIRA)
     var nome, nota01, nota02, media, passou;

   passou = false;

nome = prompt("Digite o Seu Nome")
nota01 = prompt("Digite a Sua Nota 01")
nota02 = prompt("Digita a Sua Nota 02")

media = (parseInt (nota01) + parseInt (nota02)) / 2;

if (media >= 50)
    passou = true;

if (passou || media >= 70)
    alert ("aprovado" + nome)
else
    alert ("reprovado" + nome)
*/