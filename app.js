//solucion de los ejercicios de javascript


/**
 * durante este taller espero poder manejar los conceptos basicos sobre javascript
 */


//declarar variable numerica
let miNumero = 10;
console.log(miNumero);

//declarar variable boolena
let miBooleano = true;
console.log(typeof miBooleano);

//declarar variable string
let miCadena = "juan Zapata";
console.log(miCadena);

//declarracion de array
let miArray = ["juan",26,[1,2,3]];
console.log(miArray);

//declaracion de objeto
let miObjeto = {
    nombre:"javascript",
    nivel:"basico",
    propocito:"ser el mejor"
};
console.log(miObjeto);

//pedir informacion al usuario
let nombreUsuario = prompt("ingresa tu nombre:");
alert("hola "+nombreUsuario+", bienvenido.")

//pedir una confirmacion
let confirmacion = confirm("te gusta JavaScript")
confirmacion.log("al preguntar al usurio si le gusta JavaScript su respuesta fue: "+confirmacion);

//mensaje de advertencia
console.warn("esto es solo una practica");

//mesaje de error
console.error("Error al ejecutar");

//crear tabla apartir de un array
tabla = [1,2,3,4,5];
console.table(tabla);

//