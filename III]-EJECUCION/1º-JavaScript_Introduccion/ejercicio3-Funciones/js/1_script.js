/* 
        ---------------
         LAS FUNCIONES
         ______________
    Entendidas como declaraciones de expresiones con 
    finalidad funcional.
    Principios:
    1. Palabra reservada- function()
    2. La acotacion de la funcion esta entre corchetes {}
    será el entorno de ejecucion de la funcion definida
    3. Los parámetros que use la funcion estan dentro de sus parentesis
    es decir, function(parametro1,parametro2,...)
    4. Sintaxis:
        function(parámetros,..){
            lugar de intervencion, declaracion o ejecucion de la funcion
        }
*/
var nombre = prompt('Introduce tu nombre');
/*
Script sin controlar
swal({
    title:'Bienvenido ' + nombre
}) */
function saludar() {
    /* Controlamos  un script */
    swal({
        title:'Bienvenido Señor/a: ' + nombre
    });
    
}
function despedida() {
    swal({
        title:'Hasta pronto Señor/a: ' + nombre
    });
    
}