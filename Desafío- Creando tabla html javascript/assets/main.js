//ingresar nombre y carrera

var nombre = prompt("Ingrese su nombre");
var carrera = prompt("Ingrese su carrera");

//titulo

document.write("<h1>Notas Finales</h1>");
document.write("<p class=''>Nombre: " + nombre + "</p>");
document.write("<p class=''>Carrera:" + carrera + "</p>");

// notas
var nota1 = parseInt(prompt("Ingrese Nota 1 de ramo HTML"));
var nota2 = parseInt(prompt("Ingrese Nota 2 de ramo HTML"));
var nota3 = parseInt(prompt("Ingrese Nota 3 de ramo HTML"));
const division = 3;

var promedio1 = nota1 + nota2 + nota3;
var promedioFinal1 = promedio1 / division;

document.write("<table class='table'>");
document.write(
  "<caption>Para aprobar el ramo JavaScript con nota 4, necesita obtener un 4.00 en la nota 3</caption>"
);
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");

document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");
document.write("<td>" + nota1 + "</td>");
document.write("<td>" + nota2 + "</td>");
document.write("<td>" + nota3 + "</td>");
document.write("<td>" + promedioFinal1 + "</td>");
document.write("<tr>");
document.write("</tbody>");

var nota4 = parseInt(prompt("Ingrese Nota 1 de ramo CSS"));
var nota5 = parseInt(prompt("Ingrese Nota 2 de ramo CSS"));
var nota6 = parseInt(prompt("Ingrese Nota 3 de ramo CSS"));

var promedio2 = nota4 + nota5 + nota6;
var promedioFinal2 = promedio2 / division;

var nota7 = parseInt(prompt("Ingrese Nota 1 de ramo JavaScript"));
var nota8 = parseInt(prompt("Ingrese Nota 2 de ramo JavaScript"));
//var nota9 = parseInt(prompt("Ingrese Nota 3 de ramo JavaScript"));

const division2 = 2;
var promedio3 = nota7 + nota8 ;
var promedioFinal3 = promedio3 / division2;

document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>CSS</th>");
document.write("<td>" + nota4 + "</td>");
document.write("<td>" + nota5 + "</td>");
document.write("<td>" + nota6 + "</td>");
document.write("<td>" + promedioFinal2 + "</td>");
document.write("<tr>");
document.write("</tbody>");

document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>JavaScript</th>");
document.write("<td>" + nota7 + "</td>");
document.write("<td>" + nota8 + "</td>");
document.write("<td>" + "-"+ "</td>");
document.write("<td>" + promedioFinal3 + "</td>");
document.write("<tr>");
document.write("</tbody>");
