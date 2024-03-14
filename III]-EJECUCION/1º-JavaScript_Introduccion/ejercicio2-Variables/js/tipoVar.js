/* 
                ---------------------
                  Tipos de Variable
                _____________________

        Tipos de variable, solo aclarar 4 conceptos generales:
        a) Declaracion.
        b) Tipo de variable (descripcion)
        c) Valor de la variable (numerico o no)
        d) Asignacion (=)
        📣 Hay un conflicto cognitivo cuando el tipo y el valor se declaran
        a la vez y se definen en si misma.
*/

//a) var
var texto; // Variable string, siempre caracteres
var numero; // variable number, siempre serán numero reales
var buleana; // variable boolean (true o false)

//b y  c) Tipo de variable y asignacion de valor
texto='Cadena de Texto';
numero=4;
buleana= true;

/* Recuerda: 
Volver a visualiizar el + como concatenador y ademas
como absorbe desde js,  un elemento en html
 */ 

document.write('<div> Esto es un variable string: ' +   texto + '<br></div> ');
document.write('<div> Esto es un variable number: ' +   numero+'<br>' );
document.write('Esto es un variable boolean: ' +   buleana+'<br>');

/* Backslash, o caracteres de escape, solo utilizables fuera del 
doctype
Sintaxis:             Resultado
\n                  salto de linea
\t                  tabulacion
\simbolo            \'

*/
alert(texto+'\n' + numero+'\n' + buleana);
console.log(texto+ '\n' + numero+ '\n' + buleana);


