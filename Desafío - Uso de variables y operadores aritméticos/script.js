
//Ejercicio 2: 
//se le pide al usuario que entregue dos números naturales distintos.
document.write(" ");
document.write("Ejercicio 2: ");
var num1 = prompt("Ingrese un número natural: ");
var num2 = prompt("Ingrese un segundo número natural distinto al primero: ");
// a través de un document.write se entregan la suma, la resta, la multiplicación, la división y el módulo.
document.write("La suma  de los dos números naturales es: ");
document.write(parseInt(num1)+parseInt(num2));
document.write(" ");
document.write("La resta es: ");
document.write(parseInt(num1)-parseInt(num2));
document.write(" ");
document.write("La multiplicación es: ");
document.write(parseInt(num1)*parseInt(num2));
document.write(" ");
document.write("La división es: ");
document.write(parseInt(num1)/parseInt(num2));
document.write(" ");
document.write("El módulo es: ");
document.write(parseInt(num1)%parseInt(num2));
document.write(" ");
document.write("Ejercicio 3: ");


//Ejercicio 3: 

const K = 237.15;
var c = prompt ("Ingrese la temperatura en grados Celsius: ");
document.write("Transformación a grados Kelvin: ");
var cNumero = parseInt(c)
document.write(cNumero+K);
document.write(" ");
document.write("Transformación a grados Fahrenheit: ");
document.write((cNumero*9)/5+32);
document.write(" ");
document.write("Ejercicio 4: ");

//Ejercicio 4:

var dias = prompt("Ingrese los días: ");
var dias = parseInt(dias);
var años=Math.floor(dias/365);
var semanas= Math.floor( (dias%365) /7);
var diasFinales= Math.floor( (dias%365) % 7);
document.write("años: "+ años +", " + "semanas: "+ ", "+ semanas +"dias"+", " +diasFinales);
document.write(" ");
document.write("Ejercicio 5: ");


//Ejercicio 5: 

var n1 = prompt("Ingrese el primer número: ");
var n1 = parseInt(n1);
var n2 = prompt("Ingrese el segundo número: ");
var n2 = parseInt(n2);
var n3 = prompt("Ingrese el tercer número: ");
var n3 = parseInt(n3);
var n4 = prompt("Ingrese el cuarto número: ");
var n4 = parseInt(n4);
var n5 = prompt("Ingrese el quinto número: ");
var n5 = parseInt(n5);
var suma= n1 + n2 + n3 + n4 + n5;
var promedio = suma/5;
var suma = document.write("La suma de todos sus números es: " + suma);
document.write(" ");
var suma = document.write("El promedio de todos sus números es: " + promedio);


