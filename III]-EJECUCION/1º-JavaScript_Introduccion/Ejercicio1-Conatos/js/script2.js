/* Llamadas clásicas de uso directo a referencias al usuario o propio documento.
a) document.write
    Primero hace llamada al documento.
    "." dicho punto es la unión de una propiedad (conjunto de características) o método (conjunto de acciones).
    Asigna una propiedad, en este caso sobreescribir el documento.
    La sintaxis:
        document.write('texto...');
    Un concepto asociado directo es que siempre, los textos a partir de ahora, los llamaremos conjunto de caracteres
    o string.
    Los llamaremos conjunto de caracteres o string he irán entre comillas o simples o compuestas.
*/

document.write('<h3>Mi segundo script sin control</h3>');
document.write('<h2> Mi tercer script </h2>')

/* b) console.log{
    va dirigida a los entornos de ejecución no visibles siempre al usuario,
    pero que nuesro cliente (browser) sí recoge, además podemos consultarlo, esta consulta será la propiedad .lng
} 

Sintaxis:
    console.log(string, number & operadores)

*/

console.log('números y letras (string)');
/* Analizamos y visualizamos  */

console.log(4+3);
/* Números y operadores */

console.log((4+3)+ ' number');
/* La propiedad .log muestra los mensajes en la consola y recibe el argumento uno o más objetos
Cada objeto se evalúa independientemente y ante varios elementos u objetos el + se convierte en una
concatenación */