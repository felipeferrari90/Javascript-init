/**********************************************************************************************************/

// DECLARAÇÃO DE VARIAVEL

var variavel01 = "String";  //automaticamente vira tipo string
let varialel02 = 32         //automaticamente vira tipo int
var variavel03;      // tipo undefinied

// DIFERENÇA DE VAR E LET

for (let i = 0; i < 5; i++) {                 //LET - variaveis de escopo local que morrem  assim que tal
    alert(i); // 1, 2, 3, 4                     escopo morre, nao podendo mais ser acessada.
}
alert(i); // i não está definida 

for (var i = 0; i < 5; i++) {                 
    alert(i); // 1, 2, 3, 4                                                                     
}                                                     
alert(i); // 10


// VAR - torna a variavel acessivel apenas ao seu escopo de função

        z = 0;  // variaveis sem VAR e LET são acessadas de qualquer contexto

        function foo(){
        var x = 3;
        console.log(x); //resultará 3.
        console.log(z); //resultará 0.
        console.log(y); //aqui a variável y do escopo de bar() não é accesível, resultará undefined.
        }

        function bar(){
        var y = 4;
        console.log(y); //resultará 4.
        console.log(z); //resultará 0.
        console.log(x); //aqui a variável x do escopo de foo() não é accesível, resultará undefined.
        }

        console.log(z); //resultará 0.
        console.log(x); //aqui a variável x do escopo de foo() não é acessível e resultará em undefined.
        console.log(y); //aqui a variável y do escopo de bar() não é acessível e resultará em undefined.


// LET - o escopo da variavel é menos que o escopo de funcao, e sim de bloco de execução de código

function foo(){
    var x = 1;
    let y = 3;

    if (true){
      var x = 2;
      let y = 4;
      console.log(x); //Irá resultar 2.
      console.log(y); //Irá resultar 4.
    }
    console.log(x); //Irá resultar 2 porque o escopo do 'VAR' abrange toda a função foo().
    console.log(y); //Irá resultar 3 porque o escopo do 'LET' abrangiu apenas o bloco, 
                    //diferente da atribuição na expressão if.
}


//quando vc declara var fora do escopo de funcao ela ja é global, ou seja nao precisa passar ela como args
//de funcoes anonimas ou funcoes normais porque ai a funcao vai passar a tratar a variavel como escopo de 
//funcao, e em funcoes CALLBACK podendo dar erro

/**********************************************************************************************************/

//DECLARAÇÃO DE ARRAYS

    //notacao literal

    var arrayVazio = [];
    var cores = ['azul','verde','vermelho'];
    var cor1 = cores[0];
    var cor2 = cores.item(0);

    //notacao de construtor

    var cores = new Array("azul","verde","vermelho")
    var cor3 = cores[0];
    var cor4 = cores.item(0);

/**********************************************************************************************************/

//DECLARAÇÃO DE FUNÇÕES

    //funcao simples

    function somaMaisDobroDoSegundo(a , b) {    //não se deve colocar o tipo do param nos argumentos 
        return a * b;
    }

        /* OBS: ao passar parametros não primitivos (arrays e objetos) faz com que a mudança em 
            parametros deles fique fora do escopo de função, afinal os mesmos são ponteiros */

    //expressão de função

    var square = function quadrado(numero) {
        return numero * numero
    }; 
    var x = square(4) // x recebe o valor 16


    //funcao anonima 

            //vc não é obrigado a dar nome pra sua expressao de funcao, ela pode ser anonima
    
    var square = function quadrado(numero) {
        return numero * numero
    }; 
    var x = square(4) // x recebe o valor 16


    //funcao que tem como parametro outra funcao 

    function map(funcao, valor) {
        var result = []; 
        var i;
        for (i = 0; i != valor.length; i++)
          result[i] = funcao(valor[i]);
        return result;
    }
      
    map(function(x) {
        return x * x * x
    }, [0, 1, 2, 5, 10]);  //retorna [0, 1, 8, 125, 1000].
    
         /* passando uma funcao anonima para a funcao map, essa funcao pega o outro argumento que pode
            ate ser array e vai usar a funcao em cada elemento da iteração e retornar um novo array
            com o resultado delas */


    //funcao definida numa base de uma condicao

    var minhaFuncao;

    if (num == 0){
        minhaFuncao = function(objeto) {
        objeto.make = "Toyota"
        }
    }

        //OBS: CLOSURES é um recurso de função javascript avançado

    //funcoes iffy - funcoes chamadas imediatamente
    
    var result = (function () {      //sintaxe com parentese envolvendo pra dizer que tudo é uma expressao
        var nome = "Felipe";         //isso faz a variavel nome morrer depois da chamada e nao vira global   
        return nome;                 // + o () antes de fechar a expressao que faz o navegador chamar agora
    } () );   

    // Imediatamente gera a saída: 
    result; // "Felipe"

         /* funcoes iffes sao usadas para serem chamadas somente uma vez e protegidas pra evitar conflitos
         com nomes de outras variaveis afinal estao protegiadas */

/**********************************************************************************************************/

// DECLARACAO DE OBJETOS 

    // propriedade - variaveis dentro de um objeto são conhecidadas assim

    // métodos - funções dentro de um objeto são conhecidados assim

        //-notação literal

        var objeto = {}

        var Pessoa = { 
            nome: "felipe",
            idade: 26,
        }

        //-notacao de construtor

        var Pessoa = new Object();

        var Pessoa = new Pessoa({
            nome: "vitor",
            idade: 22
        });
        

    //acessando ou criando propriedades de objeto

    Pessoa.nome = "Vitor";   //notacao de ponto
    Pessoa.peso = 80.0;
    Pessoa["idade"] = 26;    //sintaxe de colchetes

    //notação de construtor

    function Pessoa(name,idade){
        this.name = name;
        this.idade = idade;
    }

    var pessoa = new Pessoa("felipe",26);

    //formas validas de declarar objetos

    var o = { a: "foo", b: 42, c: {} };
    var a = "foo", b = 42, c = {};
    var o = {
        propriedade: function ([parâmetros]) {},
        get propriedade() {},
        set propriedade(valor) {},
    };

/**********************************************************************************************************/
        
// 3 GRUPOS DE OBJETOS DEFINIDOS

    // BROWSER OBJECT MODEL

       /*- representada pelo objeto window como nivel mais alto
        
           WINDOW - janela (ou aba) atual do navegador
               DOCUMENT - pagina web atual
               HISTORY - paginas no historico do navegador
               LOCATION - url da pagina atual
               NAVIGATOR - info sobre o navegador
               SCREEN - info sobre telas do dispositivo

       */


       console.log(window.screen.width);  //printa tamanho da janela do dispositivo
       console.log(window.innerHeight);  //printa altura (excluindo a interface do navegador do usuario )
                                        //da janela do dispositivo
       window.history //referencia  o objeto history


    // GLOBAL OBJECTS
    
    var palavra = "felipe";
    palavra.toLowerCase();  //retorna a palavra em maisculo (isso é um objeto global STRING)
    palavra.isNaN()         //retorna true se nao for numero (isso é um objeto global NUMBER)
    
    var numero = Math.PI;   // retorna 3,1415... (isso é um objeto global MATH)
    Math.floor(numero)    //arredonda pra baixo
    Math.floor (Math.random() * 10) //random escolhe entre 0 e 1 - excluindo o 1

    var hoje = new Date()
    console.log(hoje.getDay)  // criando objetos do tipo DATE( ) e TIME( )

    //DOCUMENT OBJECT MODEL

       /*- document é o HTML da sua pagina 
        
         Node document - é o nó do documento (acima da tag HTML na arvore DOM)
         Node elemento - <h1> <li> <a> <div>
         Node atributo - <h1 class=""> <a ref="">
         Node text - <h1> TEXTO ENTRE TAGS QUE É O NODE TEXT <H1>

       */

    var quadrado1 = document.querySelector("quadrado.red") //retorna do html todos os elementos que tem a 
                                                          //classe square e a red 

    var quadrado2 = document.querySelectorAll("quadrado").item(3) //retornar apenas um quadrado da lista 
    
    //(explicar o document write aqui)

    //(explicar o acesso aos nodes de texto aqui - innerHTML textContent enfim ...)

/**********************************************************************************************************/

//EVENTOS

    /* tudo esta contido na pagina html de eventos.html e eventos.js */ 

/**********************************************************************************************************/ 


