console.log('Sesión 4');

//BASE DE DADES CREADA PER EXEMPLE

const alumnes = [
  {
    nom: "Joan Pérez",
    edat: 18,
    correu: "joan.perez@example.com",
    moduls: [
      { nom: "Desenvolupament Web", nota: 8.5 },
      { nom: "Bases de Dades", nota: 7.0 },
      { nom: "Sistemes Operatius", nota: 6.5 }
    ]
  },
  {
    nom: "Maria Sánchez",
    edat: 19,
    correu: "maria.sanchez@example.com",
    moduls: [
      { nom: "Desenvolupament Web", nota: 9.0 },
      { nom: "Bases de Dades", nota: 8.0 },
      { nom: "Sistemes Operatius", nota: 7.5 }
    ]
  },
  {
    nom: "Pere Martínez",
    edat: 20,
    correu: "pere.martinez@example.com",
    moduls: [
      { nom: "Desenvolupament Web", nota: 7.5 },
      { nom: "Bases de Dades", nota: 6.0 },
      { nom: "Sistemes Operatius", nota: 8.0 }
    ]
  }
];
//---------------------------------------------------------------

// array
const frutas = ['pera', 'manzana', 'plátano', 9, 32, "34"]
// acceso a posición del array
console.log(frutas[2]);

// array de dos dimensiones
const barquitos = [
  ["1A","1B","1C"],
  ["2A","2B","2C"],
  ["3A","3B","3C"],
]
console.log(barquitos[1][2]);// 2C

// Objetos javascript
const persona = {
  nombre : 'Pepe',
  apellidos : 'Lotillas Rotas'
}

console.log('nombre = ', persona.nombre);

// Array de objetos
const arrayPersonas = [
  {
    nombre : 'Pepe',
    apellidos : 'Lotillas Rotas'
  },
  {
    nombre : 'Sara',
    apellidos : 'Lotillas Rotas'
  },
  {
    nombre : 'Andres',
    apellidos : 'Roto Rotas'
  }
]



//BUSQUEDA DE: La nota de sistemas operativos de Maria y el segundo
// modulo de Pere

console.log(alumnes[1].moduls[2].nota)
console.log(alumnes[2].moduls[1].nom)

//RECORRER ELEMENTOS DE UN ARRAY-----------------------------------

//array.lenght adquiere el numero de la array
// imprime: nombre de__,i,(numero de contador),array[iposicion].nombre(detalle)
for(let i=0;i<arrayPersonas.length;i++){
    console.log('nombre de ',i,arrayPersonas[i].nombre)
}

//GENERANDO HTML A PARTIR DE UN ARRAY
//Crear lista desordenada con los nombres de jugadores

let listaHtml='<ul>'


for(let i=0;i<arrayPersonas.length;i++){
    listaHtml+='<li>'+arrayPersonas[i].nombre+'</li>'
    //otra manera de hacerla
    /* listaHtml+=`
            <li>${arrayPersonas[i].nombre}</li>
        ´
    */
}
listaHtml+='</ul>'

document.querySelector('#miLista').innerHTML=listaHtml;


//---------con una tabla--------------------


let tablaHtml='<td>'

for(let i=0;i<arrayPersonas.length;i++){
    tablaHtml+='<tr>'+arrayPersonas[i].nombre+'</tr>'
}
document.querySelector('#miTabla').innerHTML=tablaHtml



//creamos un div en html con su clase
//creamos una variable con una array donde en cada posicion hay otra array
let quiz=[
    {
        question: "¿Cuál es la capital de Francia?",
    answers: [
        { text: "Berlín", correct: false },
        { text: "Madrid", correct: false },
        { text: "París", correct: true }
    ]
    },
    {
        question: "¿Cuál es el continente más grande del mundo?",
        answers: [
            { text: "África", correct: false },
            { text: "Asia", correct: true },
            { text: "América", correct: false }
        ]
    },
    {
        question: "¿Qué elemento químico tiene el símbolo 'O'?",
    answers: [
        { text: "Oxígeno", correct: true },
        { text: "Oro", correct: false },
        { text: "Osmio", correct: false }
    ]
    }
]

//vamos acceder mediante un for a las posiciones y sacarlas en pantalla
for(let i=0;i<quiz.length;i++){
    quizGame+=`
        <h2>${quiz[i].question}</h2>
        <button>${quiz[i].answers[0].text}</button>
        <button>${quiz[i].answers[1].text}</button>
        <button>${quiz[i].answers[2].text}</button>
    `

}
document.querySelector('#quizGame').innerHTML=quizGame

/*
Declaramos let i
mientras sea menor a la array=quiz.(funcion lenght)
i++
-------
Abrimos comas para imprimir HTML ``
Declaramos una variable quizGame+= (acumulativo)
insertamos html con ${y dentro accedemos a la array quiz[posicion i].questions}
*/