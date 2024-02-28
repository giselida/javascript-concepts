/*
[Unary negation] (-)
O operador de negação unário (-) precede seu operando e o nega.
 */

const x = 1;
const y = -3;
const z = 5n;

console.log(-x); // -1
console.log(-y); // 3
console.log(-""); // -0
console.log(-true); // -1
console.log(-false); // -0
console.log(-"hello"); // NaN
console.log(-z); // -5n
