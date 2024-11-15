import { logo } from "./componentes/logo.js";
import { menu } from "./componentes/menu.js";
import { header } from "./componentes/header.js";
import { home } from "./vistas/home.js";
import { about } from "./vistas/about.js";
import { tabla } from "./vistas/partidas.js";

function app() {
  return `
    ${header()}
   <div id="vistas">
   </div>
   <div id="partidas">
                
   </div>
  `;
}

document.querySelector("#root").innerHTML = app();
document.querySelector("#vistas").innerHTML = home();

document.querySelector("#btn-home").addEventListener('click',function(){
document.querySelector("#vistas").innerHTML=home();

});

document.querySelector("#btn-about").addEventListener("click", function () {
  document.querySelector("#vistas").innerHTML = about();
});

document.querySelector("#btn-partidas").addEventListener("click", function () {
  document.querySelector("#partidas").innerHTML = tabla();
});








    
    
