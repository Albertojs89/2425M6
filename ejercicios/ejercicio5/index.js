console.log("Hola")

//Array para las variables introducidas

let bd=[
    {
        nombre: '',
        apellido: '',
        apellido2: '',
        dni: '',
        foto: '',
    },
   
];



//OBJETO CON LOS VALORES INTRODUCIDOS EN LA FICHA:

let usuario={}



//FUNCION PARA CREAR FECHA Y GUARDAR SUS VALORES

function crearFicha(){
    
    usuario.nombre = document.querySelector("#inputNombre").value
    
    usuario.apellido = document.querySelector("#apellido").value;
    
    usuario.apellido2 = document.querySelector("#apellido2").value;
    
    usuario.dni = document.querySelector("#dni").value;
    
    usuario.foto = document.querySelector("#imagen").value;
    

    //introducir los valores en la ficha con inner
    //seleccionamos la id nombreficha del html, e introducimos la variable de arriba
    document.querySelector("#nombreFicha").innerHTML=`${usuario.nombre} `
    document.querySelector("#apellidoFicha").innerHTML=`${usuario.apellido} ${usuario.apellido2}` //abrir string para dejar espacio
    document.querySelector("#dniFicha").innerHTML=usuario.dni
    document.querySelector("#urlImagen").setAttribute('src',usuario.foto);

    //seleccionamos la id de urlimagen, y con setattribute->establece o modifica el atributo
}

//FUNCION PINTAR TABLA CON LOS DATOS DE LA ARRAY
let filas='';

function pintarTabla(){
   bd.push(usuario);
    for(let i=0;i<bd.length;i++){
        // console.log("Array:",bd[i].nombre)
        
        filas=`
        <tbody id="user">
            <tr>
              <td>1</td>
              <td><img id="urlImagen" src="${bd[i].foto}" class="card-img-top" alt="..."></td>
              <td>${bd[i].nombre}</td>
              <td>${bd[i].apellido} ${bd[i].apellido2}</td>
              <td>${bd[i].dni}</td>
            </tr>
        </tbody>
        `
   }
   
   
   document.querySelector('#user').innerHTML+=filas
}

//Un = lo elimina
//+= lo acumula
document.querySelector(".btn").addEventListener("click",function(event){
    event.preventDefault();
    crearFicha();
    pintarTabla()
})