console.log("Hola")

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
/* EXPLICACION MATHRANDOM
-La funcion coje un numero minimo y maximo
-el Math.floor redonda al valor minimo
-

*/


  const numero = numeroAleatorio(1, 100);
  console.log(numero); 

