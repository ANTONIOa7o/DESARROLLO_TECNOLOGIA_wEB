

/* 
Vamos a trabajar con unas funciones ya definidas  en el metalenguaje
de javascript, es decir, definitiva todo codigo tiene capacidad
de acceso a analisis y calculos inmediatos. Tales como en areas
algebraicas, gramatica o union de caracteres asi como de referencias
horarias.

*/
/* a) Funcion Matematica  metodos y propiedades asociadas */

function funcionesMath() {
    var numero =5;
    document.getElementById('resultado1').innerHTML='FUNCIONES MATEMATICAS';
    document.getElementById('resultado').innerHTML=
    'Logaritmo: '+ Math.log(1000) + '<br>' +
    'Exponenciales: ' + Math.exp(numero) + '<br>' +
    'Raiz cuadrada: ' + Math.sqrt(3.2) + '<br>' +
    'Potencia 2 elevado a 8: '+ Math.pow(2,8) + '<br>' +
    'Valores absoluto: ' + Math.abs(-215) + '<br>' +
    'Redondeo Medio: ' + Math.round(5.2348) + '<br>' +
    'Random o semilla: ' + Math.random() + '<br>' +
    'Random nº enteros: ' + Math.random()*10  + '<br>' +
    'Valores max: ' + Math.max(numero,6,9,22) + '<br>' +
    'Conseno de Pi' + Math.cos(Math.PI) + '<br>' +
    /* Pasar un numero a string */
    'Numero a string: ' + numero.toString();  
}

function funcionesString() {
    var texto = 'JavaScrip Funciones & Metodos';
    document.getElementById('resultado1').innerHTML='FUNCIONES CADENA DE TEXTO';
    document.getElementById('resultado').innerHTML=
    '<b>Minusculas:</b> ' + texto.toLocaleLowerCase()  + '<br>' +
    'Mayusculas: ' + texto.toLocaleUpperCase()+ '<br>' +
    'Longitud de la cadena de texto:  '+ texto.length + '<br>' +
    'Localizacion de un caracter: ' + texto.indexOf('@')+ '<br>' +
    'Valor unicode: ' + texto.charCodeAt(texto.indexOf('J'));
}

function funcionesDate() {

    var fecha = new Date();
    document.getElementById('resultado1').innerHTML='FUNCIONES OBJETO DATE'
    document.getElementById('resultado').innerHTML=
    'Fecha(Simplificada): ' + fecha.toLocaleDateString()+ '<br>' +
    'Hora: ' + fecha.toLocaleTimeString()+ '<br>' +
    'Mes: ' + (fecha.getMonth()+1)+ '<br>' +
    'Dia de la semana: ' + fecha.getDay()+ '<br>' +
    'Segundo: ' + fecha.getSeconds()+'<br>' +
    'Nº dia: '+ fecha.getDate() +'<br>' +
    'General: ' + fecha.toTimeString()+'<br>';
     
}