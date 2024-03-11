/* 
            _____________
            
            DECRACION Var
            _____________
    Como realmente se declaran la variables desde su inicio
    hasta su declaracion mas directa.
    a)Explicita
    b)Implicita

    La implicita será la presentacion de las variables de manera
    mas oficial; En definitiva este es el proceso que estable
    la logica del lenguaje

    a) Explicita.
    Como ya dijimos habrá palabras reservadas a dicho lenguaje
    una de ellas será la de variable, es decir, 'var' y seguidamente
    el nombre que se le asigna a dicha variable:
    var nombreVariable;
    Una vez asignado el nombre, se le ASIGNA un valor:
    nombreVariable = 'Valor'; 
    dicho valor tendrá diferentes caracteristicas que abordaremos mas
    adelante
    Ej:
    var nombre;
    nombre = 'Toño';

    b) Implicita.
    Llamamos a la variable y directamente le  asignamos el valor, es decir,
    var nombre = 'Toño';

    Vamos a llamar a nuestra variable →
*/

var nombre = 'Antonio Cuadrado Alvarez';
var apodo ='Toño';

/* Utilizamos una estructura basica de llamada optammos por: */
alert( '<h3> Me llamo '+ nombre + '<br>' + ' y mi apodo es: ' + apodo );

/* Y ojo no funciona h3,ni el br porque no esta en ambito Doctype */
/* Entonces, Nos apoyaremos en el sweetAlert */
swal ({
title:'Me llamo: ' + nombre,
text:'y mi apodo es: ' + apodo,
button: false,
timer: 3000,

})
