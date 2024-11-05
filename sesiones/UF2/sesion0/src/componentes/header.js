import {menu} from "./menu.js" 


export function header(){
  return `
  <header>
    <h1>SOY EL HEADER</h1>
  </header>
  ${menu()}
  `;

}