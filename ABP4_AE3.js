// 1.- Construya una función que dado un número n entero
// y menor que 100 calcule la sumatoria de 1 hasta n.

function sumatoria(n) {
  let resultado = 0;
  if (n < 100 && n > 0) {
    for (let i = 1; i <= n; i++) {
      resultado += i;
      console.log(resultado);
    }
    return resultado;
  } else {
    return console.log("Por favor ingrese un número entero entre 1 y 99.");
  }
}
sumatoria();

// 2.-  Construya  una  función  que  imprima  si  un  número  es  primo  o  no.
// Los  números  primos  son aquellos que son divisibles solo por 1 y por sí mismos.

function esPrimo(numero) {
  if (numero <= 1) {
    console.log(numero + " no es un número primo");
    return;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      console.log(numero + " no es un número primo");
      return;
    }
  }
  console.log(numero + " es un número primo");
}
esPrimo();

// 3.- Cree una función que dado un número n entero y menor que 100 imprima
// la cuenta regresiva, es decir si n es 5  deberá imprimir 5,4,3,2,1.

function cuentaRegresiva(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
cuentaRegresiva();

// 4.- Construya una función que dado un número n entero mayor que 10 y menor
// que 1000 calcule la sumatoria de todos los números pares contenidos en el rango.

function sumatoriaPares(n) {
  if (n < 10 || n > 1000) {
    return console.log("El número debe ser mayor a 10 y menor a 1000.");
  }else{
  let sumatoria = 0;
  for (let i = 2; i <= n; i += 2) {
    sumatoria += i;
    console.log(sumatoria)
  }
  return sumatoria;
}
}
sumatoriaPares(9)
// 5.-  Cree  una  función  que  permite  dado  un  número  n  imprima  la  tabla
// de  multiplicar  de  dicho número hasta el 12.

function imprimirTablaMultiplicar(n) {
  if (n < 1) {
    return console.log("El número debe ser mayor a 1.");
  }else{
  for (let i = 1; i <= 12; i++) {
    console.log(n + " x " + i + " = " + n*i);
  }
}
}
imprimirTablaMultiplicar()