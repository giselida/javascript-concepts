/*
[toString()]

O método toString() de valores numéricos retorna uma string representando este valor numérico.

Number.prototype.toString
            
retorna uma string que representa o 
objeto Number conforme a base especificada.

*/

const count = 10;

console.log(count.toString()); //'10'
console.log(typeof count.toString()); //'string'

console.log((17).toString()); //'17'
console.log(typeof (17).toString()); //'string'

console.log((17.2).toString()); //'17.2'
console.log(typeof (17.2).toString()); //'string'

const x = 6;

console.log(x.toString(2)); //'110'
console.log(typeof x.toString(2)); //'string'

console.log((254).toString(16)); //'fe'
console.log(typeof (254).toString(16)); //'string'

console.log((-10).toString(2)); //'-1010'
console.log(typeof (-10).toString(2)); //'string'

console.log((-0xff).toString(2)); //'-11111111'
console.log(typeof (-0xff).toString(2)); //'string'
