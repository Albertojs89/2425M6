console.log('Hola sesion 2');

// // SUMAR NUMEROS
// //Pedir datos con prompt

// const numero=prompt('Introduce un numero: ')
// console.log('numero: ',numero);
// const numero2=prompt('Introduce un numero: ')
// console.log('numero2: ',numero2);

// //parseint convierte el numero en integer
// console.log('suma: ',parseInt(numero)+parseInt(numero2));

//Juego de los numeros---------------------------------

const numeroAdivinar=10


// if(numeroIntroducido<10){
//     console.log('Es menor')

// }else if(numeroIntroducido>10){
//     console.log('Es mayor')
// }else{
//     console.log('Acertaste!')
// }

// while(intento<4||numeroIntroducido==numeroAdivinar){
//     const numeroIntroducido=prompt('Introduce un numero: ')
//     if(numeroIntroducido<10){
//         console.log('Es menor')
    
//     }else if(numeroIntroducido>numeroAdivinar){
//         console.log('Es mayor')
//     }else{
//         console.log('Acertaste!')
//     }
//     intento++;
// }

// if(numeroIntroducido==numeroAdivinar){
//     console.log('Conseguido')
// }else{
//     console.log('Lo siento')
// }

let intentos=0
let numeroIntroducido=-1

while(intentos<3&&numeroAdivinar!=numeroIntroducido){
    console.log('intentos',intentos)
    const numeroIntroducido=prompt('Introduce un numero: ')
    console.log('numeroIntroducido: '+numeroIntroducido);


     if(numeroIntroducido>numeroAdivinar){
        console.log('Es menor')
    }else if(numeroIntroducido<numeroAdivinar){
        console.log('es mayor')
    }else{
        console.log('es igual')
        intentos=2
    }

    intentos++
}