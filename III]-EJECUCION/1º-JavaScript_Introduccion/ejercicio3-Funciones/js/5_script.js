/* 1º  Recogida de las variables */
function primerEvento() {
    /* onmouseover */
    var eMail = document.getElementById('eMail').value;
    var password = document.getElementById('contraseña').value;
    
    document.getElementById('resultado2').innerHTML=
    'esta es tu e-mail: '+ eMail +'<br>' + ' & tu clave es: ' + password;

}
function segundoEvento() {
    /* target.addEventListener('click') */
    
}

function tercerEvento() {
    /* el click2, donde podemos redirigir o ejecutar algun otro script */
    location.href='https://github.com/ANTONIOa7o';
}
function cuartoEvento() {
    /* Salga del entorno ofrezca o respuesta o UX */
    document.getElementById('resultado2').innerHTML='';
    
    
}