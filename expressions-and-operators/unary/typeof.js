/*
[typeof]

O operador typeof retorna uma string indicando o tipo do operando não avaliado. operando é a string, variável, palavra-chave ou objeto para o qual o tipo deve ser retornado. Os parênteses são opcionais.

*/

// Numbers
console.log(typeof 42); // number
console.log(typeof 3.14); // number
console.log(typeof NaN); // number
console.log(typeof Number("1")); // number

// Strings
console.log(typeof ""); // string
console.log(typeof "bla");// string
console.log(typeof `template literal`);// string
console.log(typeof "1");// string
console.log(typeof typeof 1);// string
console.log(typeof String(1));// string

// Booleans
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof Boolean(1)); // boolean
console.log(typeof !!1); // boolean

// Symbols
console.log(typeof Symbol()); // symbol
console.log(typeof Symbol("foo")); // symbol
console.log(typeof Symbol.iterator); // symbol

// Undefined

let declaredButUndefinedVariable;
console.log(typeof undeclaredVariable); // undefined
console.log(typeof undefined); // undefined
console.log(typeof declaredButUndefinedVariable); // undefined

// Objects

console.log(typeof { a: 1 }); // object
console.log(typeof [1, 2, 4]); // object
console.log(typeof new Date()); // object
console.log(typeof /[a-z]/); // object
console.log(typeof arguments); // object
console.log(typeof null); // object
console.log(typeof new String("a")); // object
console.log(typeof new Number(1)); // object

// Functions

console.log(typeof function () {}); // function
console.log(typeof (() => {})); // function
console.log(typeof class Human {}); // function
console.log(typeof Math.max); // function
console.log(typeof new Function()); // function
console.log(typeof Symbol); // function

{
  console.log(typeof 42); // number
  console.log(typeof 3.14); // number
  console.log(typeof ""); // string
  console.log(typeof "bla"); // string
  console.log(typeof Symbol()); // symbol
  console.log(typeof Symbol("foo")); // symbol
  console.log(typeof undeclaredVariable); // undefined
  console.log(typeof undefined); // undefined
  console.log(typeof { a: 1 }); // object
  console.log(typeof [1, 2, 4]); // object
  console.log(typeof new Date()); // object
  console.log(typeof /[a-z]/); // object
  console.log(typeof function () {}); // function
  console.log(typeof (() => {})); // function
  console.log(typeof class Human {}); // function
  console.log(typeof Math.max); // function
}
