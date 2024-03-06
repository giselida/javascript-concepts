/*
[isNaN()]

O método estático Number.isNaN() determina se o valor passado é o valor numérico NaN e retorna falso se a entrada não for do tipo Number. É uma versão mais robusta da função isNaN() global original.

Number.isNaN
          
método estático que
verifica se o valor 
passado como argumento é NaN e do tipo Number
  
*/

console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(Number.NaN)); //true
console.log(Number.isNaN(0 / 0)); //true
console.log(Number.isNaN("NaN")); //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN({})); //false
console.log(Number.isNaN("hello")); //false
console.log(Number.isNaN(true)); //false
console.log(Number.isNaN(null)); //false
console.log(Number.isNaN(37)); //false
console.log(Number.isNaN("37")); //false
console.log(Number.isNaN("37.37")); //false
console.log(Number.isNaN("")); //false
console.log(Number.isNaN(" ")); //false
