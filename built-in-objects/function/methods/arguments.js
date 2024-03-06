/*
argumentos é um objeto semelhante a um array acessível dentro de funções que contém os valores dos argumentos passados para essa função.
*/
function doSomething(a, b, c) {
  console.log(arguments[0]); //1
  console.log(arguments[1]); //2
  console.log(arguments[2]); //3
  console.log(arguments.length); //3
  console.log(arguments.callee); //[λ: doSomething]
}

doSomething(1, 2, 3);
doSomething("João", "Gustavo", "Gisélida");
