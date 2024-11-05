//creacion variable document
//metodo de document para seleccionar algo: (queryselector)
//queremos seleccionar el boton 1 con la id:

const boton1=document.querySelector("#btn1");
console.log('boton1',boton1);

//console.log() PARENTESIS
console.log(document.querySelector("h1"))


//con el console.log(variable.innerHTML)--- sacamos lo que hay dentro del h1

const titulo=document.querySelector("h1")
console.log('interior de h1: ',titulo.innerHTML);


//Hemos modificado el html con la variable titulo.innerHTML, titulo es el h1
//+= es un operador que SUMA lo que YA había antes:
titulo.innerHTML+="<em>SESION 3 APLICADA CON INNERHTML</em>"

//addeventlistener pones un "escuchador de eventos"

//evento click del boton 1

    //2 parametros: (1-Que queremos escuchar, llamada a funcion)
boton1.addEventListener("click",fnBoton1)
function fnBoton1(){
    console.log("Click en botón 1");
}

//Lo mismo para el boton 2 pero resumido

document.querySelector("#btn2").addEventListener("mouseover",function(){
    console.log("Al pasar por encima del botón 2");
})



//Evaluando textos-------------------------------------------

const operacion="2+5"
console.log("operación: ",operacion,window.eval(operacion));
console.log("el resultado es: ",eval(operacion));
