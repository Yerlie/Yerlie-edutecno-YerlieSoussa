let i = parseInt(prompt("Ingresa un numero del 1 al 20: "));

if (i < 1 || i > 20 || Number.isNaN(i)) {
  prompt("El numero no es valido");
} else {
  console.log("Tabla de multiplicar del " + i);
}
for (let j = 1; j <= i; j++) {
  resultado = i * j;
  console.log(j + "x " + i + " = " + " " + resultado);
}

for (let j = 1; j <= i; j++) {
  let resFactorial = 1;
  for (let k = 1; k <= j; k++) {
    resFactorial = resFactorial * k;
  }
  console.log("Factorial de " + j + " es: " + resFactorial);
}
