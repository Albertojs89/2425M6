console.log("codigo Carlos de la caja fuerte")




// 1. Capturar clicks-------------------------------------------------

//Eventos al clickar los botones:
document.querySelector("#btn1").addEventListener('click',function(){
    document.querySelector("#mensaje").innerHTML="Dame"
})
document.querySelector("#btn2").addEventListener('click',function(){
    document.querySelector("#mensaje").innerHTML="el"
})
document.querySelector("#btn3").addEventListener('click',function(){
    document.querySelector("#mensaje").innerHTML="CÓDIGO"
})


// 2. Manipulació del DOM------------------------------------------------
let contenido2=document.querySelector(".ejer2");

function cambiarContenido(){
    document.querySelector("#mensaje2").innerHTML="EL CODIGO"
    contenido2.style.backgroundColor="lighblue";
}

document.querySelector("#btn4").addEventListener('click',function(){
    cambiarContenido();
})

// 3. Mostrar/ocultar elements amb style.display------------------

let mensajebtn=document.querySelector("#mensaje3");
//LO HEMOS PUESTO EL STYLE COMO ATRIBUTO POR DEFECTO EN NONE.
console.log(mensajebtn)

function mostrarOcultar(){
     if(mensajebtn.style.display==="none"){
        //LO MUESTRA
        mensajebtn.style.display="block";
    }else{
        //LO OCULTA
        mensajebtn.style.display="none";
    }
}

document.querySelector("#toggleButton").addEventListener('click',function(){
    mostrarOcultar()
})

// 4. Generar numeros aleatorios amb Math.random()------------------

let numeroAleatorio=Math.floor(Math.random()*100);
console.log(numeroAleatorio);

document.querySelector("#numAleatorio").innerHTML=`El numero aleatorio entre 1 y 100: ${numeroAleatorio}`;

//5. Manipular atributs amb setAttribute()-------------

function cambiarImagen() {
    var imagen = document.querySelector("#image");
    // Cambia la ruta de la imagen según tus necesidades
    imagen.setAttribute('src', 'https://www.fcbarcelona.com/photo-resources/2024/09/07/8c4f80a6-48cf-492d-b964-7a68808c7029/EA019746.jpg?width=1200&height=750');
}

document.querySelector("#btn5").addEventListener('click', function(){
    cambiarImagen();
})


// 6. Afegir i eliminar classes amb classList --------------

var elemento=document.querySelector("#btn6");

document.querySelector("#btn6").addEventListener('click', function(){
    elemento.classList.toggle("actiu"); 
})


//7. Recorrer un array con forEach()---------------------------

let listaFrutas=["pera","manzana","plátano","uva"];

function recorrer(listaFrutas){
    listaFrutas.forEach(function(fruta){
       document.querySelector("#fruitList").innerHTML+=`<li>${fruta}</li>`;  //agregar a la lista HTML cada fruta
    })
}

recorrer(listaFrutas);

// 8. Accedir a un array de dues dimensions--------------------------

//crear un array de dos dimensiones con preguntas y respuestas
let arrayPreguntasRespuestas=[
    {pregunta:"¿Mejor videojuego de la historia?", respuesta:"Zelda"},
    {pregunta:"¿Cuál es el mejor jugador de la historia?", respuesta:"Messi"},
    {pregunta:"¿Que equipo es el más sucio?", respuesta:"Real Madrid"}
    
];

//Acceder individualmente a las preguntas y respuestas

console.log(arrayPreguntasRespuestas[0].pregunta);
console.log(arrayPreguntasRespuestas[0].respuesta);





//mostrar las preguntas en pantalla con bucle FOR





for(let i=0;i<arrayPreguntasRespuestas.length;i++){
   let preguntasRespuestas=document.querySelector("#pregRes");

   preguntasRespuestas.innerHTML+=`
   <article>
        <div id="pregunta">${arrayPreguntasRespuestas[i].pregunta};</div>
        <div id="respuesta">${arrayPreguntasRespuestas[i].respuesta};</div>
    </article>
   
   
   <br>
   `;
}

//9. Funció per sumar dos números-------------------

function suma(num1,num2){
    return num1+num2;
}

document.querySelector("#botonSuma").addEventListener('click',function(){
    const resultado=suma(10,20);
    document.querySelector("#resultat").innerHTML="La Suma de 10 + 20 es: "+resultado;
})

//10. Validar una entrada buida-------------------------

document.getElementById("botonValidar").addEventListener("click", function() {
    const entrada = document.getElementById("entrada").value;
    if (entrada === "") {
        alert("El campo está vacío. Por favor, introduce un valor.");
    } else {
        alert("Entrada válida.");
    }
});

//11. Interacció amb addEventListener()------------------

document.getElementById("botonAlerta").addEventListener("click", function() {
    alert("Dame el codigo!!");
});


//12. Control de flux amb if....else------------------

function compararNumero(num) {
    let resultado=document.querySelector("#textoTitulo");
    if (num > 10) {
        resultado.innerHTML="El número es mayor que 10";
        console.log("El número és més gran que 10");
    } else {
        resultado.innerHTML="El número es menor o igual que 10";
        console.log("El número és menor o igual a 10");
    }
}

document.querySelector("#botonComparar").addEventListener("click", function(){
    compararNumero(8); 
});

//13. Manipulació d'atributs amb getAttribute()------------------

document.querySelector("#mostrarSrc").addEventListener("click", function() {
    const src = document.querySelector("#imge").getAttribute("src");
    document.querySelector("#resul").textContent = "L'atribut src és: " + src;
});


//14. Eliminar l'atribut amb removeAttribute()------------------

document.querySelector("#eliminarAlt").addEventListener("click", function() {
    document.querySelector("#imatge13").removeAttribute("alt");
});

//15. Mostrar numeros de forma condicional

const numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num);
    }
});

document.querySelector("#result15").innerHTML=numeros;

//Ej. Math

//1. Valor absolut---------------------------------------------------
//una funcion que reciba un numero y devuelva su valor absoluto utilizando la funcion Math.abs()
function valorAbsolut(num) {
    return Math.abs(num);
   
}

// Exemple d'ús:
console.log(valorAbsolut(-5)); 
console.log(valorAbsolut(3));  

//2. Signe d'un numero----------------------------------------------------

function determinarSigne(num) {
    var signe = Math.sign(num);
    if (signe === 1) {
        return "El número és positiu.";
    } else if (signe === -1) {
        return "El número és negatiu.";
    } else {
        return "El número és zero.";
    }
}

// Exemple d'ús:
console.log(determinarSigne(-10)); // Retorna "El número és negatiu."
console.log(determinarSigne(0));   // Retorna "El número és zero."
console.log(determinarSigne(7));   // Retorna "El número és positiu."


// 3. Maxim de tres numeros-----------------------------------------------

function trobarMaxim(a, b, c) {
    return Math.max(a, b, c);
}

// Exemple d'ús:
console.log(trobarMaxim(5, 10, 3)); // Retorna 10


//4. Minim d'un array------------------------------------------------------

function trobarMinim(array) {
    return Math.min(...array);
}

// Exemple d'ús:
console.log(trobarMinim([5, 10, 3, 8, 2])); // Retorna 2

//5. Arrel quadrada-------------------------------------------------------

function calcularArrelQuadrada(num) {
    if (num >= 0) {
        return Math.sqrt(num);
    } else {
        return "No es pot calcular l'arrel quadrada d'un número negatiu.";
    }
}

// Exemple d'ús:
console.log(calcularArrelQuadrada(16)); // Retorna 4
console.log(calcularArrelQuadrada(-9)); // Retorna "No es pot calcular l'arrel quadrada d'un número negatiu."

//6. Arrodonir un numero a l'enter més proper--------------------------------

function arrodonirNumero(num) {
    return Math.round(num);
}

// Exemple d'ús:
console.log(arrodonirNumero(4.6)); // Retorna 5
console.log(arrodonirNumero(4.3)); // Retorna 4

//8. Arrodonir cap avall--------------------------------------------------

function arrodonirCapAvall(num) {
    return Math.floor(num);
}

// Exemple d'ús:
console.log(arrodonirCapAvall(5.8)); // Retorna 5
console.log(arrodonirCapAvall(2.2)); // Retorna 2


//9. Elimintar la part decimal d'un numero---------------------------------

function truncarNumero(num) {
    return Math.trunc(num);
}

// Exemple d'ús:
console.log(truncarNumero(6.7));   // Retorna 6
console.log(truncarNumero(-6.7));  // Retorna -6

//10. Calcular el sinus d'un angle 

function calcularSinus(angleGraus) {
    var angleRadianes = angleGraus * (Math.PI / 180);
    return Math.sin(angleRadianes);
}

// Exemple d'ús:
console.log(calcularSinus(30)); // Retorna 0.5
console.log(calcularSinus(90)); // Retorna 1


//S  T   R   I   N   G   S

//1. Interpolacio de variables amb cometes obertes------------------------

function interpolarVariables(nom, edat) {
    return `El meu nom és ${nom} i tinc ${edat} anys.`;
}

// Exemple d'ús:
console.log(interpolarVariables("Joan", 25)); // Retorna "El meu nom és Joan i tinc 25 anys."

//2. ChartAt()-------------------------------------------------------------

function obtenirCaracter(cadena, posicio) {
    return cadena.charAt(posicio);
}

// Exemple d'ús:
console.log(obtenirCaracter("Hola", 1)); // Retorna "o"

//3. IndexOf()-------------------------------------------------------------
function trobarPosicio(cadena, subcadena) {
    return cadena.indexOf(subcadena);
}

// Exemple d'ús:
console.log(trobarPosicio("JavaScript és genial", "genial")); // Retorna 13

//4. Repeat()--------------------------------------------------------------
function repetirCadena(cadena, vegades) {
    return cadena.repeat(vegades);
}

// Exemple d'ús:
console.log(repetirCadena("Hola", 3)); // Retorna "HolaHolaHola"

//5. substring()-----------------------------------------------------------

function obtenirSubstring(cadena, inici, fi) {
    return cadena.substring(inici, fi);
}

// Exemple d'ús:
console.log(obtenirSubstring("JavaScript", 0, 4)); // Retorna "Java"

//6. substr()--------------------------------------------------------------
function obtenirSubstr(cadena, inici, longitud) {
    return cadena.substr(inici, longitud);
}

// Exemple d'ús:
console.log(obtenirSubstr("JavaScript", 4, 6)); // Retorna "Script"

//7. split()---------------------------------------------------------------
function dividirCadena(cadena, separador) {
    return cadena.split(separador);
}

// Exemple d'ús:
console.log(dividirCadena("poma,pera,plàtan", ",")); // Retorna ["poma", "pera", "plàtan"]

//8. startsWith()----------------------------------------------------------

function comencaAmb(cadena, subcadena) {
    return cadena.startsWith(subcadena);
}

// Exemple d'ús:
console.log(comencaAmb("JavaScript", "Java")); // Retorna true

//9. endsWith()------------------------------------------------------------

function acabaAmb(cadena, subcadena) {
    return cadena.endsWith(subcadena);
}

// Exemple d'ús:
console.log(acabaAmb("JavaScript", "Script")); // Retorna true

//10. includes()-----------------------------------------------------------

function contéSubcadena(cadena, subcadena) {
    return cadena.includes(subcadena);
}

// Exemple d'ús:
console.log(contéSubcadena("JavaScript és genial", "genial")); // Retorna true

// 11. search()------------------------------------------------------------

function cercarCadena(cadena, subcadena) {
    return cadena.search(subcadena);
}

// Exemple d'ús:
console.log(cercarCadena("JavaScript és genial", "genial")); // Retorna 13

// 13 replace()------------------------------------------------------------

function substituirCadena(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replace(vellSubcadena, nouSubcadena);
}

// Exemple d'ús:
console.log(substituirCadena("Hola món", "món", "JavaScript")); // Retorna "Hola JavaScript"

//14. replaceAll()---------------------------------------------------------

function substituirTotes(cadena, vellSubcadena, nouSubcadena) {
    return cadena.replaceAll(vellSubcadena, nouSubcadena);
}

// Exemple d'ús:
console.log(substituirTotes("Hola món, món", "món", "JavaScript")); // Retorna "Hola JavaScript, JavaScript"

// S  T   R   I   N   G   S II------------------------------------------------

//1. tolowerCase()----------------------------------------------------------
function convertirMinuscules(cadena) {
    return cadena.toLowerCase();
}

// Exemple d'ús:
console.log(convertirMinuscules("Hola Món")); // Retorna "hola món"

//2. toUpperCase()----------------------------------------------------------

function convertirMajuscules(cadena) {
    return cadena.toUpperCase();
}

// Exemple d'ús:
console.log(convertirMajuscules("Hola Món")); // Retorna "HOLA MÓN"


//3. trimStart()------------------------------------------------------------
function eliminarEspaisInicials(cadena) {
    return cadena.trimStart();
}

// Exemple d'ús:
console.log(eliminarEspaisInicials("   Hola Món")); // Retorna "Hola Món"

//4. trimEnd()--------------------------------------------------------------

function eliminarEspaisFinals(cadena) {
    return cadena.trimEnd();
}

// Exemple d'ús:
console.log(eliminarEspaisFinals("Hola Món   ")); // Retorna "Hola Món"

//5. trim()-----------------------------------------------------------------

function eliminarEspaisExtrems(cadena) {
    return cadena.trim();
}

// Exemple d'ús:
console.log(eliminarEspaisExtrems("   Hola Món   ")); // Retorna "Hola Món"
 