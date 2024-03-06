/*
[parseFloat()]

O método estático Number.parseFloat() analisa um argumento e retorna um número de ponto flutuante. Se um número não puder ser analisado a partir do argumento, ele retornará NaN.

Number.par
        
método estático que
tenta converter um valor para float, 
caso não consiga retornar NaN.

*/

console.log(parseFloat === Number.parseFloat); //true

const sample1 = 5;
console.log(sample1); //5
console.log(Number.parseFloat(sample1)); //5
console.log(parseFloat(sample1)); //5

const sample2 = "1";
console.log(sample2); //'1'
console.log(Number.parseFloat(sample2)); //1
console.log(parseFloat(sample2)); //1

const sample3 = "Hello";
console.log(sample3); //"Hello"
console.log(Number.parseFloat(sample3)); //NaN
console.log(parseFloat(sample3)); //NaN

const sample4 = {};
console.log(sample4); //{}
console.log(Number.parseFloat(sample4)); //NaN
console.log(parseFloat(sample4)); //NaN
