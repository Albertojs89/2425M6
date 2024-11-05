console.log('sesión 1!')
// comentarios

// Variables
var nombre="Carlos";
let apellidos='Potamo';
const dominio='@fpllefia.com';
const email=apellidos+nombre+dominio;
const nombreCompleto=apellidos.toLowerCase()+nombre.toLowerCase();

console.log(nombreCompleto);
console.log('email: ', email);

// Concatenar txts con variables

const email2='otroemail'+dominio;
console.log('email2:',email2);

// Utilizando las backsticks
const email3=`otroemail${dominio}`
console.log('email3:',email3);

// Ejemplo de uso de backsticks con codigo html

const miCodigoHtml=`
    <div>
        <p>Hola</p>
    </div>

`
console.log(miCodigoHtml);