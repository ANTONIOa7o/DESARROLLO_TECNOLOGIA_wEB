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




