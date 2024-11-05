//importamos la funcion menu() desde el archivo menu.js
import {menu} from "./componentes/menu.js"
import {header} from "./componentes/header.js"
import {home} from "./vistas/home.js"
import {about} from "./vistas/about.js"
console.log('Cargando index!');

//la funcion app genera la estructura principal de la app:
//integramos la funcion menu()
function app(){
  return `
  ${header()}  
  <div id="vistas">Aquí van las vistas</div>
  `;
}





//Cargar componentes dinamicos
document.querySelector('#root').innerHTML=app();

//Cargamos la vista home por defecto



function navegar(pagina){
  if(pagina==='home'){
    document.querySelector("#vistas").innerHTML = home();
  }else if(pagina==='about'){
    document.querySelector("#vistas").innerHTML = about();
  }
}
navegar('home');
//Detectamos eventos de click en los botones
document.querySelector("#btn-home").addEventListener('click',
   () => navegar('home'));

document
  .querySelector("#btn-about")
  .addEventListener("click", () => navegar("about"));