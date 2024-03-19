/* 
                -----------------
                RECOGIDA DE DATOS
                -----------------

En este ejercicio, como ya vimos
desde el anterior ejercicio con el metodo getElemetById()
1. DONDE, lograbamos elegir y apuntar a un lugar concreto
del Doctype, este mismo metodo nos ayudará a apuntar tambien
a donde recogeremos los datos. Para ello nos apoyaremos en 
la propiedad .value 
2. Sintaxis:
document.getElementeById('nombredelId').value
(No olvidemos que los datos que recogemos son del tipo string)
3. El escenario mas plausible para la recogida de datos será un
elemnto de html denominados los input. 
Estos son la puerta de union entre el usuario, su interfaz y 
el navegador con nuestra aplicacion
*/
function login() {

   /*  1º Definimos las variable y de forma implicita asocio el metodo
    y recogemos EL VALOR de la variable
    */
    var eMail = document.getElementById('eMail').value;
    var password = document.getElementById('contraseña').value;
    swal({
        title:'Acceso Autorizado a:  ' + eMail,
        text:'clave correcta: ' + password,
        button:false,
        timer:2500
    });
    /* 2º El metodo como uso para soltar las variable o conjunto de variables */
    document.getElementById('resultado').innerHTML= eMail;

    
}

function reenvio() {
    /* metodo de localizacion entendido location()
    utilizando la propiedad de .href
    */
   location.href='0_entrada.html';
    
}

