/*passou: :=falso
         escreval ("Digite o seu nome")
   leia (nome)
        escreval ("Digite a sua nota 01")
   leia (nota01)
        escreval ("Digite a sua note 02")
   leia (nota02)

   media := (nota01 + nota02) / 2

   se media >= 50 entao
      passou := verdadeiro
   fimse
      
   se ( passou ) && ( media >= 50 || media <= 70 ) entao
        escreval ("aprovado", nome)
   senao
        escreval ("reprovado", nome)
   fimse
   */






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