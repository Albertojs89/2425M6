console.log("hola")




//creamos un div en html con su clase
//creamos una variable con una array donde en cada posicion hay otra array
let quiz=[
    {
        question: "¿Cuál es la capital de Francia?",
    answers: [
        { text: "Berlín", correct: false },
        { text: "Madrid", correct: false },
        { text: "París", correct: true },
        { text: "Patagonia", correct: false }
    ]
    },
    {
        question: "¿Cuál es el continente más grande del mundo?",
        answers: [
            { text: "África", correct: false },
            { text: "Asia", correct: true },
            { text: "América", correct: false },
            { text: "Badalona", correct: false }
        ]
    },
    {
        question: "¿Qué elemento químico tiene el símbolo 'O'?",
    answers: [
        { text: "Oxígeno", correct: true },
        { text: "Oro", correct: false },
        { text: "Osmio", correct: false },
        { text: "Verde", correct: false }
    ]
    }
]

//sacar una pregunta aleatoria:
/* Creamos una constante que genere un numero aleatorio con
    Math.random()*quiz.lenght  =  Esto crea un numero y lo multiplica
    por la cantidad de la array
    Math.floor lo redondea--- de manera que en preguntaaleatoria nos queda
    un numero de la array aleatorio
*/

let numAleatorio=Math.floor(Math.random()*quiz.length)

/* 
    cogemos de la id question, insertamos el html y entre `` modificamos
    el html, poniendo la variable quiz y entre corchetes la variable
    pregunta aleatoria concatenado con la array QUIZ
*/

document.querySelector("#question").innerHTML=`${quiz[numAleatorio].question}`

document.querySelector("#answer1").innerHTML=`${quiz[numAleatorio].answers[0].text}`
document.querySelector("#answer2").innerHTML=`${quiz[numAleatorio].answers[1].text}`
document.querySelector("#answer3").innerHTML=`${quiz[numAleatorio].answers[2].text}`
document.querySelector("#answer4").innerHTML=`${quiz[numAleatorio].answers[3].text}`

