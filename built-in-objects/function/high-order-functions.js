/*
Uma função de ordem superior é uma função que recebe uma ou mais funções como argumentos ou retorna uma função como resultado.

Funções de alta ordem são funções que podem receber outras funções como argumentos e/ou retornar funções como resultados, e utilizam closures para viabilizar essas ações. Elas permitem que você escreva um código mais conciso e expressivo, além de facilitar a manipulação de coleções de dados, como arrays, matrizes e dicionários.

Existem vários tipos diferentes de funções de ordem superior, como mapear e reduzir.

Em JavaScript, as funções são objetos de primeira classe, o que significa que podem ser tratadas como qualquer outro valor. Isto significa que as funções podem ser passadas como argumentos para outras funções, retornadas como valores de funções e armazenadas em variáveis.

Funções que usam outras funções como argumentos ou retornam funções como valores são chamadas de funções de ordem superior. Aqui está um exemplo de função de ordem superior que pega uma função como argumento e a aplica a um array:

*/

function mapArray(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = mapArray(numbers, (number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Uma função de alta ordem é uma função que retorna outra função, ou uma função que
// pega outra função como argumento.

//Retornando uma função de uma função
function add(a, b) {
  return () => a + b;
}

add(2, 3)();

// recebe uma função como argumento

function multiply(a, b, doneFn) {
  const multiply = a * b;
  doneFn(multiply);
}

multiply(2, 3, (result) => console.log(result));
