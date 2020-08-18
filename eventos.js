
/**********************************  1 - FUNCAO CHAMADA INLINE HTML     ****************************/



// funcao que deixa elemento amarelo apos ele ser clicado
function amarelar(elemento){
    document.getElementById(elemento.id).classList.add("yellow");
}


/******************************* 2 - ROTINHAS DE TRATAMENTO DE EVENTOS  ****************************/

// funcao que coloca e tira o elemento vermelho apos ele ser clicado

function avermelhar(){
    if(document.getElementById("quadrado-2").classList.contains("red"))
         document.getElementById("quadrado-2").classList.remove("red");
    else  document.getElementById("quadrado-2").classList.add("red");
}

var quadrado2 = document.getElementById("quadrado-2");
quadrado2.onclick = avermelhar;

//atributo on<nomeDoEvento>
//nesse formato nao se precisa usar o () na chamada do metodo 


/********************************    3- OUVINTES DE EVENTO        ***********************************/

// a ideia que coloca uma cor azul a ele ao ser clicado e tira depois de 3 segundos

function azularCincoSegundos(){
    document.getElementById("quadrado-3").classList.add("blue");
    setTimeout( () => document.getElementById("quadrado-3").classList.remove("blue") ,3000);
     //acessando sitetimeout da classe window
     // o primeiro parametro do site time out seria um handler (funcao) que tem que ta nessa sintaxe
     // () => { //açao; } é igual a :  function(){  //acao; }
}

var quadrado3 = document.getElementById("quadrado-3");
quadrado3.addEventListener('click', azularCincoSegundos);

//atributo <nomeDoEvento> , vc deve tirar o prefixo ON, ja que vc criou foi um onvinte
//nesse formato nao se precisa usar o () na chamada do metodo
//existe um terceiro parametro opcional que se por default é false(ele indica algo que chamou a captura)

/************    4- PARAMETROS DE ROTINAS DE TRATAMENTO E OUVINTES DE EVENTO        ************************/

// a ideia que coloca uma cor azul a ele ao ser clicado e tira depois de 3 segundos

function pularCentro(elemento){
    document.getElementById(elemento.id).style.margin = "0 auto";
}

//uma soluçao alternativa se vc quer declarar parenteses nos nomes da funcao

var quadrado4 = document.getElementById("quadrado-4");
quadrado4.addEventListener('mouseover', () => { pularCentro(quadrado4); }); //this como args n funciona

//OBS: DEIXAR PRA FALAR DE FLUXO DE EVENTOS NO FINAL

/*************************************    5 - OBJETO EVENTO   ************************************/

//quando um evento é disparado surge um objeto EVENT onde vc pode usar dados uteis dele 

//quando vc da um parametro na sua funcao nomeada vc automaticamente, o nome dela sera a instancia desse obj

// nesse caso "e" é um event, abaixo duas formas de chamar tal evento

function descolorir(e){  
    color = "green"      // vc precisa passar o paramentro se nao da erro
    console.log(e.target);           // <div id="quadrado-5" class="quadrado green">Q5</div>
    console.log("tipo do evento:" + e.type);      //tipo do evento: click
    document.getElementById("quadrado-5").classList.remove("green");       
}

//OBS: vc ate pode definir outro parametro 

var quadrado5 = document.getElementById("quadrado-5");
quadrado5.addEventListener("click", descolorir);

//funcao pra colorir o quadrado apos clicar e printar teclas apertadas(essa funcao ta anonima)

function colorir(e,color){
    document.getElementById("quadrado-6").classList.add(color);
}

var quadrado6 = document.getElementById("quadrado-6");

quadrado6.addEventListener("click", (e) => {
    colorir(e,"green")
});

quadrado6.addEventListener("keypress", (e)=> { console.log(e.keyCode); });  

/*
  NÃO VAI FUNCIONAR ESSE EVENTO ACIMA, afinal diferente do evento clique que aponta um avo, um elemento de 
  tecla nao, sendo assim troca-se o quadrado6 pelo proprio document, ai subentende que esse evento é 
  pra pagina toda sem precisar selecionar target, abaixo o codigo funciona (pode se usar window ao inves de 
  document também)
*/

document.addEventListener("keypress", (e)=> { console.log(e.target) , console.log(e.keyCode); }); 
//imprime como album todo o html entre as tags <body> 

/*************************************   7 - DELEGAÇÃO DE EVENTOS   ************************************/

//criar ouvintes de evento para vários elementos deixa mais lento a pagina porem vc pode 
//criar um ouvinte de elementos no elemento pai

function azularFilhos(elemento){
   var filhos = document.getElementById(elemento.id).children;
   console.log(filhos);
   for(let i=0; i< filhos.length ; i++)
      if(i != filhos.length -1)
        filhos[i].classList.add("blue");
}

var quadrado71 = document.querySelector("#quadrado-7-1");

quadrado71.addEventListener("click" , () => {  azularFilhos(quadrado71); });  


/*************************   8 - ALTERANDO O COMPORTAMENTO PADRAO   ************************************/
/*************************   preventDefault() e stopPropagation() ************************************/

//criando dois inputs que mandarao um alert se ele nao colocar letras minusculas

var textbox81 = document.getElementById('textbox-8-1');
textbox81.addEventListener( 'keypress', checarNomeComPreventDefault);

var textbox82 = document.getElementById('textbox-8-2');
textbox81.addEventListener( 'keypress', checarNomeSemPreventDefault);


function checarNomeComPreventDefault(e) {
    var charCode = e.charCode;
    if (charCode != 0) {
        if (charCode < 97 || charCode > 122) {      //97 - 122 = codigo de letras do teclado
            e.preventDefault();
            alert(
                "use apenas letras minusculas"
                + "\n" + "codigo de caracter: " + charCode + "\n"
            );
        }
    }
} 

function checarNomeSemPreventDefault(e) {
    var charCode = e.charCode;
    if (charCode != 0) {
        if (charCode < 97 || charCode > 122) {      //97 - 122 = codigo de letras do teclado
       
            alert(
                "use apenas letras minusculas"
                + "\n" + "codigo de caracter: " + charCode + "\n"
            );
        }
    }
} 

//ALTERANDO COMPORTAMENTO PADRÃO DE UM LINK

linkComPrevent = document.querySelector("#link-1");
linkComPrevent.addEventListener("click", (e) => {  e.preventDefault();  } );

/*

    links com preventdefault nao te redirecionara para a pagina do google, voce cancelou o
    evento, os inputs com prevent default

    o input normalmente nao valida dados se vc nao aperta o submit, porem com preventDefault

    - em suma preventdefault Cancela o evento se for cancelável, sem parar a propagação do mesmo.

    - você pode usar o stopPropagation() para cancelar até a propagação do evento

*/


/*************************     9 - PROPAGAÇÃO DE EVENTOS     ************************************/


//PROPAGACAO DE EVENTO - quando vc clica em um elemento filho vc ta clicando no pai tambem e no pai do pai...
// acionando o evento de todos ao mesmo tempo.

//propagação de evento - clique em #q9-4: #q9-4 - #q9-3 - #q9-2 - #q9-1 - #Q9 - body - html - DOCUMENT (bubling)
//captura de evento - clique em #q9-4: DOCUMENT - html - DOCUMENT - body - #Q9 - #q9-1 #q9-2 - #q9-3 - #q9-4  (capturing)

//pintar de preto com opacidade de 20%

function empretar(){
    this.classList.add("opaco");          // vc pode usar o this ao inves de e.target se o argumento e nao for passado.
    alert(                                // é o alvo do elemento
        "clicou em " + this.id
    );
}

var quadrado9 = document.querySelector("#quadrado-9");
var quadrado91 = document.querySelector("#quadrado-9-1");
var quadrado92 = document.querySelector("#quadrado-9-2");
var quadrado93 = document.querySelector("#quadrado-9-3");
var quadrado94 = document.querySelector("#quadrado-9-4");


// existe um terceiro argumento opcional no listener que pede se vc quer o modo propagacao ou captura
// por default ele é false = por default os eventos são propagados ao invés de capturados


quadrado92.addEventListener("click", (e) => { e.stopPropagation(); alert("evento parado de ser propagado") }, false);

var quadrados9 = [quadrado9,quadrado91,quadrado93,quadrado94];

for(let i = 0; i< quadrados9.length; i++){
    quadrados9[i].addEventListener("click", empretar, false);  
}   


// o stop propagation impede que o evento se propague aos elementos pais 

// porem, o stop propagation não impede a captura de evento (somente propagação)

var botao9 = document.getElementById("botao-9");

botao9.addEventListener("click", ()=>{            
   
    if(botao9.textContent == "MODO CAPTURA EVENTO"){                 //criando funcionalidade do botao que ao clicar
        console.log(botao9.textContent);                             // fica alternando o metodo de tratamento de eventos
        botao9.textContent = "MODO PROPAGA EVENTO";                  // captura ou bubbling(propagacao);
        for(let i = 0; i< quadrados9.length; i++){
            quadrados9[i].removeEventListener("click", empretar, false);
            quadrados9[i].addEventListener("click", empretar, true);  
        }                                                                                                                                                                                              
    }
    else if(botao9.textContent == "MODO PROPAGA EVENTO"){
        console.log(botao9.textContent);
        botao9.textContent = "MODO CAPTURA EVENTO"; 
        for(let i = 0; i< quadrados9.length; i++){
            quadrados9[i].removeEventListener("click", empretar, true);
            quadrados9[i].addEventListener("click", empretar, false);  
        }   
    }
});

// () => {} funciona e (e,quadrados9) => nao, afinal colocando o args em funcao anonima ela simplesmente deixa de tratar o 
// quadrados9 que ja é global como de escopo de funcao, e no escopo de funcao de anonima ela nao fica inicializada
// sendo assim sendo do tipo UNDEFINIED


/********************************************************************************************************************************/

