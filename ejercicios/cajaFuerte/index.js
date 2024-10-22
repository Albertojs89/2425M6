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


//7. Recorrer un array con forEach()------------------

let listaFrutas=["pera","manzana","plátano","uva"];

function recorrer(listaFrutas){
    listaFrutas.forEach(function(fruta){
       document.querySelector("#fruitList").innerHTML+=`<li>${fruta}</li>`;  //agregar a la lista HTML cada fruta
    })
}

recorrer(listaFrutas);

// 8. Accedir a un array de dues dimensions

//crear un array de dos dimensiones con preguntas y respuestas
let arrayPreguntasRespuestas=[
    ["¿Cuál es la capital de Francia?", "París"],
    ["¿Cuál es el continente más grande del mundo?", "Asia"],
    ["¿Qué elemento químico tiene el símbolo 'O'?", "Oxígeno"]  //... añadir más preguntas y respuestas aquí.
]


//mostrar las preguntas en pantalla


let preguntasDiv=document.querySelector("#pregunta");
let respuestasDiv=document.querySelector("#respuesta");

for(let i=0;i<arrayPreguntasRespuestas.length;i++){
   
}

