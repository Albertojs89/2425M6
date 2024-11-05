console.log("Hola");

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

document.querySelector("#btnEnviar").addEventListener("click", function () {
  let minimo = parseInt(document.querySelector("#num1").value);
  let maximo = parseInt(document.querySelector("#num2").value);

  let numAleatorio = numeroAleatorio(minimo, maximo);

  document.querySelector(
    "#numeroAleatorio"
  ).innerHTML = `El numero aleatorio es ${numAleatorio}`;
});

//Ejercicio 2 convertir a Mayusculas y minisculas---------------------

let txtAnalizar = document.querySelector("#texto");

document.querySelector("#btnMayus").addEventListener("click", function () {
  let txtMayus = txtAnalizar.value.toUpperCase();
  document.querySelector("#texto").value = txtMayus;
});

document.querySelector("#btnMinus").addEventListener("click", function () {
  let txtMinus = txtAnalizar.value.toLowerCase();
  document.querySelector("#texto").value = txtMinus;
});

//BUSCADOR DE PALABRAS EN UN TEXTO-----------------------------------

document.querySelector("#btnBuscar").addEventListener("click", function () {
  let palabraBusqueda = document.querySelector("#busqueda").value.toLowerCase(); // Convertimos a minúsculas para una comparación más robusta
  let textoBuscar = document
    .querySelector("#textoBuscar")
    .textContent.toLowerCase(); // Obtenemos el texto del span y lo pasamos a minúsculas
  let palabras = textoBuscar.split(" ");
  let nuevoTexto = "";
  let contador = 0;

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabraBusqueda) {
      //remarcar la palabra repetida
      nuevoTexto += `<span class="bg-primary text-light">"${palabras[i]}"</span> `;
      //modificar la palabra con element.textContent:

      contador++;
    } else {
      nuevoTexto += palabras[i] + " ";
    }
  }

  // Asignamos el nuevo texto con las palabras resaltadas al elemento HTML
  document.querySelector("#textoBuscar").innerHTML = nuevoTexto.trim();
  //trim(): Es un método en JavaScript que se aplica a cadenas de texto (strings).
  //Su función principal es eliminar los espacios en blanco al inicio y al final de una cadena.
  //Estos espacios en blanco pueden ser espacios, tabulaciones o saltos de línea.
  document.querySelector(
    "#contadorPalabras"
  ).innerHTML = `La palabra "${palabraBusqueda}" se repite ${contador} veces`;

  //Resumen de 10 palabras

  function obtenirSubstr(palabras) {
    const primeras10 = palabras.slice(0, 10);
    /*
    ejemplo:
    let array = [1, 2, 3, 4, 5];
    let subArray = array.slice(1, 3); // Resultado: [2, 3]

    */
    console.log(primeras10);
    return primeras10;
  }

  // Exemple d'ús:
  document.querySelector("#resumen").innerHTML = obtenirSubstr(palabras);
});


//PARTE 3  Crea un script que ens demani un nom i data de naixement en format dd/mm/aaaa



document.querySelector("#convertirNombre").addEventListener("click",function(){
  //hacemos value del contenido del input
  //con trim le ordenamos los parametros y condiciones del txt que ponemos en el nombre
  let nombre3=document.querySelector("#ejer3Name").value;
  document.querySelector("#nombreConvertido").innerHTML=nombre3.trim().replace(" ","-");
  
})

document.querySelector("#convertirFecha").addEventListener("click",function(){
  //ahora vamos hacer lo mismo con la fecha
  let fecha3 = document.querySelector("#convertirFecha").value.split("/");
  console.log(fecha3);
  // document.querySelector("#fechaConvertida").innerHTML=fecha3;
})

