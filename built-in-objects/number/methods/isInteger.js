/*
[isInteger()]

O método estático Number.isInteger() determina se o valor passado é um número inteiro

Number.isInteger
  
*/

console.log(Number.isInteger(0)); //true
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(-100000)); //true
console.log(Number.isInteger(99999999999999999999999)); //true
console.log(Number.isInteger(0.1)); //false
console.log(Number.isInteger(Math.PI)); //false
console.log(Number.isInteger(NaN)); //false
console.log(Number.isInteger(Infinity)); //false
console.log(Number.isInteger(-Infinity)); //false
console.log(Number.isInteger("10")); //false
console.log(Number.isInteger(true)); //false
console.log(Number.isInteger(false)); //false
console.log(Number.isInteger([1])); //false
console.log(Number.isInteger(5.0)); //true
console.log(Number.isInteger(5.000000000000001)); //false
console.log(Number.isInteger(5.00000000000000001)); //true
