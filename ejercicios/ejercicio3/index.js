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


//Definir las variables: posicion, aciertos, fallos
let currentPosition=0;
let successes=0;
let failures=0;
let forward;




// MOVER PERSONAJE---------------------------------------------------------------------
function movePlayer(forward){
    
    if (forward===true){
        currentPosition++;
        successes++;
        
    }else if(forward===false){
        currentPosition=currentPosition-3;
        failures++;
        
    }
}

// GENERAR PREGUNTA-----------------------------------------------------------------
function generarPregunta(){
    let numAleatorio=Math.floor(Math.random()*quiz.length)
    document.querySelector("#question").innerHTML=`${quiz[numAleatorio].question}`;


    document.querySelector("#answer1").innerHTML=`${quiz[numAleatorio].answers[0].text}`
    
    document.querySelector("#answer1").addEventListener('click',function(){
    if (quiz[numAleatorio].answers[0].correct==true){
        document.querySelector("#result").innerHTML="Correcto"
        forward=true
        movePlayer(forward);
    }else{
        document.querySelector("#result").innerHTML="Incorrecto"
        forward=false
        movePlayer(forward);
    }
    })
    document.querySelector("#answer2").innerHTML=`${quiz[numAleatorio].answers[1].text}`
        document.querySelector("#answer2").addEventListener('click',function(){
            if (quiz[numAleatorio].answers[1].correct==true){
                document.querySelector("#result").innerHTML="Correcto"
                forward=true
                movePlayer(forward);
            }else{
                document.querySelector("#result").innerHTML="Incorrecto"
                forward=false
                movePlayer(forward);
            }
        })
    document.querySelector("#answer3").innerHTML=`${quiz[numAleatorio].answers[2].text}`
        document.querySelector("#answer3").addEventListener('click',function(){
            if (quiz[numAleatorio].answers[2].correct==true){
                document.querySelector("#result").innerHTML="Correcto"
                forward=true
                movePlayer(forward);
            }else{
                document.querySelector("#result").innerHTML="Incorrecto"
                forward=false
                movePlayer(forward);
            }
        })
    document.querySelector("#answer4").innerHTML=`${quiz[numAleatorio].answers[3].text}`
        document.querySelector("#answer4").addEventListener('click',function(){
            if (quiz[numAleatorio].answers[3].correct==true){
                document.querySelector("#result").innerHTML="Correcto"
                forward=true
                movePlayer(forward);
            }else{
                document.querySelector("#result").innerHTML="Incorrecto"
                forward=false
                movePlayer(forward);
            }
        })
}


generarPregunta();








//reiniciar el boton siguiente -----------

document.querySelector("#next-question").addEventListener('click',function(){
    // window.location.href="index.html";
    document.querySelector("#result").innerHTML="";
    generarPregunta()

    console.log("posicion actual: ",currentPosition);
    console.log("aciertos: ",successes);
    console.log("fallos: ",failures);
})








