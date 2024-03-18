/* 
        -------------------------------
        DEFINIR AMBITO DE LAS VARIABLES
        _______________________________
    Los ambitos de las variables son dos:
    1.Globales(var generales que me plantea la propia ejecuion, Variables eje).
        Caracteristicas:
        ->Se accede desde cualquier lugar del script (a su valor, tipo,...)
        ->declaradas fuera de cualquier otro ambito, liberadas de su acotacion
        ->Ventaja: uso de transversalidad
        ->Desventaja: Carga de la variable y uso de memoria
    2.Locales(var secundaria o sucedaneas, var de apoyo para lograr determinados
        resultados)
        Caracteristicas:
        ->Siempre rondarán el entorno de alguna funcion o anidacion de funcion
        ->Ejecutan solo en el ambito
        ->Carga la variable en el uso de la funcion  pero solo utiliza  la  carga
        de la mima en su desarrollo, posteriormente desaloja la memoria(Ventaja)
        ->Limita el acceso a dicha variable (Desventaja)

*/
/* var Global */
var n1=parseInt(prompt('Introduce el 1º numero'));
var n2=parseInt(prompt('Introduce el 2º numero'));

function sumar() {
    /* Var Local */
    var resultado = n1+n2;
    swal({
        title:'el resultado de la suma es: '
        + resultado
    })
    
}
function restar(n1,n2) {//Como trabaja esta funcion, sin la llamada de  los parámetros
swal('el resultado de la resta es: '+ (n1-n2));
    
}

function multiplicar() {
    swal('el resultado de la multiplicacion es: ' + (n1*n2));
    
}

function dividir() {
    swal('el resultado de la multiplicacion es: ' + (n1/n2));
    
}