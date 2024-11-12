import { logo } from "./logo.js";
import { menu } from "./menu.js";

export function header() {
  return `
    <div id="menuheader">
      ${logo()}
      ${menu()}
    </div>
  
  `;
}

