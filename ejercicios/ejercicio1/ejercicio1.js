console.log('Mega calculator 3000')

let entradaActual='';

document.querySelector("#btn1").addEventListener('click',function(){
    // queryselector coje el id btn1 y le añade un evento al hacer click
    //que conlleva la funcion-> de la cual coje la id pantalla y añade su html
    console.log('1');
    entradaActual+='1';
    document.querySelector('#pantalla').innerHTML=entradaActual;
    // AFEGIR OPERADORS +- |------------------------------------------

});

document.querySelector('#btnSuma').addEventListener('click',function(){
    console.log('+')
    entradaActual+='+';
    document.querySelector('#pantalla').innerHTML=entradaActual;
});

document.querySelector('#btnResta').addEventListener('click',function(){
    console.log('-')
    entradaActual+='-';
    document.querySelector('#pantalla').innerHTML=entradaActual;
});

document.querySelector('#btnIgual').addEventListener('click',function(){
    const resultado = eval(entradaActual);
    console.log('resul=',resultado);//testeo
    document.querySelector('#pantalla').innerHTML=resultado;
});
//LIMPIAR PANTALLA--------------------------------------
document.querySelector('#btnBorrar').addEventListener('click',function(){
    entradaActual='';
    document.querySelector('#pantalla').innerHTML='0';
})



document.querySelector("#btn2").addEventListener('click',function(){
    console.log('2');
    entradaActual+='2';
    document.querySelector('#pantalla').innerHTML=entradaActual;
        // AFEGIR OPERADORS +- |------------------------------------------


});




document.querySelector("#btn3").addEventListener('click',function(){
    console.log('3');
    entradaActual+='3';
    document.querySelector('#pantalla').innerHTML=entradaActual;
        // AFEGIR OPERADORS +- |------------------------------------------


});




document.querySelector("#btn4").addEventListener('click',function(){
    console.log('4');
    entradaActual+='4';
    document.querySelector('#pantalla').innerHTML=entradaActual;
        // AFEGIR OPERADORS +- |------------------------------------------


});




document.querySelector("#btn5").addEventListener('click',function(){
    console.log('5');
    entradaActual+='5';
    document.querySelector('#pantalla').innerHTML=entradaActual
        // AFEGIR OPERADORS +- |------------------------------------------


});




document.querySelector("#btn6").addEventListener('click',function(){
    console.log('6');
    entradaActual+='6';
    document.querySelector('#pantalla').innerHTML=entradaActual
        // AFEGIR OPERADORS +- |------------------------------------------


});




document.querySelector("#btn7").addEventListener('click',function(){
    console.log('7');
    entradaActual+='7';
    document.querySelector('#pantalla').innerHTML=entradaActual
        // AFEGIR OPERADORS +- |------------------------------------------


});




document.querySelector("#btn8").addEventListener('click',function(){
    console.log('8');
    entradaActual+='8';
    document.querySelector('#pantalla').innerHTML=entradaActual
        // AFEGIR OPERADORS +- |------------------------------------------


});





document.querySelector("#btn9").addEventListener('click',function(){
    console.log('9');
    entradaActual+='9';
    document.querySelector('#pantalla').innerHTML=entradaActual
        // AFEGIR OPERADORS +- |------------------------------------------


});






document.querySelector("#btn0").addEventListener('click',function(){
    console.log('0');
    entradaActual+='0';
    document.querySelector('#pantalla').innerHTML=entradaActual
        // AFEGIR OPERADORS +- |------------------------------------------


});



//Eval con el calculo = -------------------------------
/* probando la funcion eval
const suma=5+5
eval(suma)
console.log(suma)
*/

