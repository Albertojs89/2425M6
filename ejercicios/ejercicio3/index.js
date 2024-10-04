console.log("Quiz con juego de mesa")




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
let numAleatorio;

 const casillas=document.querySelectorAll('.div')


// MOVER PERSONAJE---------------------------------------------------------------------
function movePlayer(forward){
    //Creamos la funcion moveplayer basada en la variable booleana forward, que nos dirá si es cierto o no

    if (forward===true){
        currentPosition++;
        successes++;
        //Definimos que si acertamos vaya pintando la posicion actual
        casillas[currentPosition].classList.add('div-point')
        
    }else if(forward===false){
        currentPosition=currentPosition-3;
        failures++;
        if(currentPosition<1){
            currentPosition=0;
        }
        //Y en un bucle decimos que desde la posicion actual hasta el final deshaga pintado
        for(let i=currentPosition;i!=19;i++){
            casillas[i].classList.remove('div-point')
            casillas[i].classList.add('div')
        }
        //Finalmente volvemos a pintar nuestra posicion actual->
        casillas[currentPosition].classList.add('div-point')
       
        
        
    }
}



// GENERAR PREGUNTA-----------------------------------------------------------------
function generarPregunta(){
    
    numAleatorio=Math.floor(Math.random()*quiz.length)
    document.querySelector("#question").innerHTML=`${quiz[numAleatorio].question}`;


    document.querySelector("#answer1").innerHTML=`${quiz[numAleatorio].answers[0].text}`
    document.querySelector("#answer2").innerHTML=`${quiz[numAleatorio].answers[1].text}`
    document.querySelector("#answer3").innerHTML=`${quiz[numAleatorio].answers[2].text}`
    document.querySelector("#answer4").innerHTML=`${quiz[numAleatorio].answers[3].text}`



}

function comprobarFinal(){
    if(currentPosition==19){
        console.log('HAS LLEGADO A LA CASILLA 20, FELICIDADES!')
        document.querySelector("#result").innerHTML="HAS GANADO"
        const botonOff=document.querySelector("#next-question");
        botonOff.disabled=true;
        
            const textoFinal = document.querySelector("#result");
        
            // Cambiar estilo del texto final, cogiendolo de la clase result
            textoFinal.style.color = "blue";          
            textoFinal.style.fontSize = "60px";       
            textoFinal.style.fontWeight = "bold";    
            textoFinal.style.backgroundColor = "yellow"; 

            
    }
}

//GENERAMOS LA FUNCION GENERAR PREGUNTA-----------------------
generarPregunta();


//Bloqueamos preguntas una vez hagamos click:-------------------------
document.querySelector('#answers').addEventListener('click',function(){
    document.querySelector("#answer1").disabled = true;
    document.querySelector("#answer2").disabled = true;
    document.querySelector("#answer3").disabled = true;
    document.querySelector("#answer4").disabled = true;
})


//estos son los escuchadores de eventos en los botones de las respuestas-------------------------------------------------------------------
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
    
        
document.querySelector("#answer2").addEventListener('click',function(){
        // onoff=true;
        // block(onoff);
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
    
        
document.querySelector("#answer3").addEventListener('click',function(){
        // onoff=true;
        // block(onoff);
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
    
document.querySelector("#answer4").addEventListener('click',function(){
        // onoff=true;
        // block(onoff);
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

//---------------------------------------------------------------------------------------------------------------------------










//reiniciar el boton siguiente --------------------------------------------------------

document.querySelector("#next-question").addEventListener('click',function(){
    //Control de error: La posición no baja del 1
    if(currentPosition<1){
        currentPosition=0;
    }
    
    //REINICIAMOS EL BLOCK DE LAS RESPUESTAS
    document.querySelector("#answer1").disabled = false;
    document.querySelector("#answer2").disabled = false;
    document.querySelector("#answer3").disabled = false;
    document.querySelector("#answer4").disabled = false;
    
    //Borramos el resultado para que no se vea nada
    document.querySelector("#result").innerHTML="";
    //Volvemos a llamar a la funcion generarPregunta y comprobamos si hemos ganado:
    generarPregunta()
    comprobarFinal()

    console.log("posicion actual: ",currentPosition);
    console.log("aciertos: ",successes);
    console.log("fallos: ",failures);

    console.log("ESTA ES MI POSICION",currentPosition);
})








