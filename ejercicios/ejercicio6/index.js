console.log("Hola")


  
/* EXPLICACION MATHRANDOM ENTRE DOS VALORES MAX Y MIN----------

-La funcion coje un numero minimo y maximo
-el Math.floor redonda al valor minimo
-math random da un numero del 0 a casi el 1
-multiplicado por el valor maximo menos el minimo= cantidad de numeros que hay +1 para incluir el maximo


*/


function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const numero = numeroAleatorio(1, 100);
  console.log(numero); 

let minimo=document.querySelector("#num1")
let maximo=document.querySelector("#num2")









 document.querySelector("#btnEnviar").addEventListener('click',function(){
  
  

 

})