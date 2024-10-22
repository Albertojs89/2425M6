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

  // const numero = numeroAleatorio(1, 100);
  // console.log(numero); 

 document.querySelector("#btnEnviar").addEventListener('click',function(){
  let minimo=parseInt(document.querySelector("#num1").value);
  let maximo=parseInt(document.querySelector("#num2").value);
  
  let numAleatorio=numeroAleatorio(minimo,maximo);
  
  document.querySelector("#numeroAleatorio").innerHTML=`El numero aleatorio es ${numAleatorio}`


})


//Ejercicio 2 convertir a Mayusculas y minisculas---------------------

let txtAnalizar=document.querySelector("#texto");

document.querySelector("#btnMayus").addEventListener('click',function(){
  let txtMayus=txtAnalizar.value.toUpperCase();
  document.querySelector("#texto").value=txtMayus;
});

document.querySelector("#btnMinus").addEventListener('click',function(){
  let txtMinus=txtAnalizar.value.toLowerCase();
  document.querySelector("#texto").value=txtMinus;
});


//BUSCADOR DE PALABRAS EN UN TEXTO-----------------------------------



document.querySelector("#btnBuscar").addEventListener('click',function(){
  let palabraBusqueda=document.querySelector("#busqueda").value;
  
  


});



