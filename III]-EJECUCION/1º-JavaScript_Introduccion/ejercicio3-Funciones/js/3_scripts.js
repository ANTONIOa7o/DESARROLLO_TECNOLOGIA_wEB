function abrir() {
    /*1º Variable hora, esta variable es un objects:
    Construye y deconstruye valores dependiendo del momento a su llamada
   */
    var pamplona = new Date();
    /* 
    2º LLamamos al  metodo getElementId():
    */
    document.getElementById('resultado').innerHTML=
    /* Las propiedades del objeto */
    pamplona.getHours() + ':'+ pamplona.getMinutes() + ':' + pamplona.getSeconds();
}

function cerrar() {
    document.getElementById('resultado').innerHTML='';
}