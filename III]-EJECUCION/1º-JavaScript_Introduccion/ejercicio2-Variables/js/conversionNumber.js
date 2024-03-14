/* 1º Declaramos la variable */

var dato = prompt('escribe un nº del 1 al 9 para conocer tu descuento:');
console.log(dato + ' es de tipo: ' + typeof(dato) );
/* 
Se confirma la teoria que todo valor recogido de la interfaz del usuario
es string, como caracteres
*/

/* 2º Declaro variables sucedaneas ↓ */

var maholis = parseFloat(dato);
console.log(maholis + ' es de tipo: '+ typeof(maholis));
/* Percibimos no solo que esta variable se ha convertido en numero, sino que
ademas acepta decimales, es decir, punto flotante */

var daniela = parseInt(dato);
console.log(daniela + ' es de tipo: ' + typeof(daniela));

/* Juego dirigido de las variables */
document.write('<h2>tu descuento es: ' + maholis*0.20 + '€ para tu proxima compra</h2>') 




