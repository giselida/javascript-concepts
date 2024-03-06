/*
[parseInt()]

O método estático Number.parseInt() analisa um argumento de string e retorna um número inteiro da base ou base especificada.

Number.parseInt
        
método estático que
tenta converter um valor para int de uma 
determinada base numérica, caso não consiga retornar NaN.

*/

console.log(parseInt === Number.parseInt); //true

const sample1 = 5;
console.log(Number.parseInt(sample1)); //5
console.log(parseInt(sample1)); //5

const sample2 = "1";
console.log(Number.parseInt(sample2)); //1
console.log(parseInt(sample2)); //1

const sample3 = "0xF";
console.log(Number.parseInt(sample3, 16)); //15
console.log(parseInt(sample3, 16)); //15

const sample4 = "Hello";
console.log(Number.parseInt(sample4)); //NaN
console.log(parseInt(sample4)); //NaN

const sample5 = {};
console.log(Number.parseInt(sample5)); //NaN
console.log(parseInt(sample5)); //NaN
