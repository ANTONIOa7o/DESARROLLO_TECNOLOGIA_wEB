/* Declaracion de las variables: 2 planteamientos
a) Globales? o Locales?
b) Mis variables secundarias?
 */
/* a */
var contador = 0;
/* b */
var respuesta = 0;
/* desarrollar una funcion anidada */
function ventaTotal() {
    agregar(++contador);/* conseguimos el click transformalo a numero */
    venta();
    /* Podremos desplegar toda una bateria
    de funciones que se ejecutan en orden
    a la accion de esta funcion
    */
}


function venta() {
    respuesta = (contador*69);
    document.getElementById('resultado').innerHTML ='Importa a abonar: ' + respuesta + '€'
}

function agregar(contador) {
  
    document.getElementById('nºClick').innerHTML=contador
    
}

function borrar() {
    contador = 0;
    document.getElementById('nºClick').innerHTML=contador;
    document.getElementById('resultado').innerHTML=contador;
    
}
function comprar(respuesta,contador) {
    /* Puedo hacer pasar por esta funcion dichos parametros,
    enchufe preparado para la conexion back
     */
    /* var gastosenvio=0;
    var totaldebengo = respuesta*gastosenvio;
    function vetaImpuesto() {
        location.protocol(totaldebengo)
    } */
    document.getElementById('abono').href='https://www.watersportsoutlet.com/';
}




