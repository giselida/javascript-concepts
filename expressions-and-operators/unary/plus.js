/*
[Unary plus] (+)

O operador unário de mais (+) precede seu operando e avalia seu operando, mas tenta convertê-lo em um número, se ainda não o tiver feito.
*/

const x = 1;
const y = -1;
const z = 1n;

console.log(+x); // 1
console.log(+y); // -1
console.log(+""); // 0
console.log(+true); // 1
console.log(+false); // 0
console.log(+"hello"); // NaN
console.log(+z); // Cannot convert a BigInt value to a number 
