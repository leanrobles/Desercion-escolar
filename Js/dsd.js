alert("Bienvenido/a a nuestra pagina web")
var nombre= prompt("Ingrese su nombre");
alert("Hola " + nombre + " mucho gusto, esta pagina contiene informacion,imagenes y videos sobre la desercion escolar, espero que te guste y puedas conocer mas sobre esta problematica que ocurre dia a dia");
alert("Cuando termines de visitar la pagina, agradeceria que dejaras una calificacion del 1 al 10, siendo el 1 como peor nota y el 10 como la mas alta, esto nos sirve para seguir mejorando")
var nota= prompt("Ingrese su nota"); 
if (nota == 10) {
    alert("Muchas Gracias, me alegro que te haya gustado la pagina")}
if (nota >= 6) {
    alert("Gracias por tu valoracion, seguiremos mejorando para que tu calificacion aumente")}
if (nota < 6) {
    alert("Sentimos que la pagina no te haya gustado del todo, seguiremos mejorando")}

