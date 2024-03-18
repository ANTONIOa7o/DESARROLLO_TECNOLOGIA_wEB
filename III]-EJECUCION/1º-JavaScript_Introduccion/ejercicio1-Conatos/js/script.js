/* Comentarios */
// Comentarios individuales de la línea

/* alert("Bienvenido a mi primer Script"); */

/* Atentos al ciclo de carga de la pagina, ya que si no ponemos aqui el script al ejecutarse
como no se ha cargado an la pagina no puede mostrar el script y no se visualizara, para ello tenemos que
ponerlo al final de la ejecucion de la pagina */


/* Tipos de iconos a nuestra disposicón 

- "warning"
- "error"
- "info"
- "success"
*/

/* Script necesita de ejecucion de intervalo. La API no lo ejecuta correctamente.
Ver más adelante */
swal(
    {
        title: "Comenzamos",
        button: false,
        timer: 1500,
    }
) 