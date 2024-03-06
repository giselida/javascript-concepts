/*
[isFinite()]

O método estático Number.isFinite() determina se o valor passado é um número finito - ou seja, ele verifica se um determinado valor é um número e se o número não é Infinito positivo, Infinito negativo nem NaN.

Number.isFinite
        
método estático que
verifica se um número
é diferente de Infinity, -Infinity e NaN

*/

const operation1 = 1 / 0;
console.log(operation1); //Infinity
console.log(Number.isFinite(operation1)); //false

const operation2 = 10 / 5;
console.log(operation2); //2
console.log(Number.isFinite(operation2)); //true

const operation3 = 0 / 0;
console.log(operation3); //Infinity
console.log(Number.isFinite(operation3)); //false

const operation4 = -1 / 0;
console.log(operation4); //-Infinity
console.log(Number.isFinite(operation4)); //false

console.log(Number.isFinite("0")); //false
