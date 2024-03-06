/*
O método estático Number.isSafeInteger() determina se o valor fornecido é um número inteiro seguro.

Number.isSafeInteger
    
*/

console.log(Number.isSafeInteger(3)); //true
console.log(Number.isSafeInteger(Math.pow(2, 53))); //false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); //true
console.log(Number.isSafeInteger(NaN)); //false
console.log(Number.isSafeInteger(Infinity)); //false
console.log(Number.isSafeInteger("3")); //false
console.log(Number.isSafeInteger(3.1)); //false
console.log(Number.isSafeInteger(3.0)); //false
