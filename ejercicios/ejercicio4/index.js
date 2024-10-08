console.log("Hola")




function crearFicha(){
    event.preventDefault(); //evita que se recargue la pagina
    //
    let nombre = document.querySelector("#inputNombre").value
    console.log("nombre: ",nombre);
    let apellido = document.querySelector("#apellido").value;
    console.log("apellido: ",apellido);
    let apellido2 = document.querySelector("#apellido2").value;
    console.log("segundo apellido: ",apellido2)
    let dni = document.querySelector("#dni").value;
    console.log("DNI: ",dni);
    let foto = document.querySelector("#imagen").value;
    

    //introducir los valores en la ficha con inner
    //seleccionamos la id nombreficha del html, e introducimos la variable de arriba
    document.querySelector("#nombreFicha").innerHTML=`${nombre} `
    document.querySelector("#apellidoFicha").innerHTML=`${apellido} ${apellido2}` //abrir string para dejar espacio
    document.querySelector("#dniFicha").innerHTML=dni
    document.querySelector("#urlImagen").setAttribute('src',foto);

    //seleccionamos la id de urlimagen, y con setattribute->establece o modifica el atributo
}


document.querySelector(".btn").addEventListener("click",function(){
    crearFicha();
})