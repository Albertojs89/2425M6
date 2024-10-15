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