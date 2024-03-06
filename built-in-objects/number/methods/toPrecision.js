/*
[toPrecision()]

O método toPrecision() de valores numéricos retorna uma string representando este número com a precisão especificada.

Number.prototype.toPrecision
          
retorna uma string que representa 
o objeto Number com uma precisão especificada.

  */

let numObj = 5.123456;

console.log(numObj.toPrecision()); //'5.123456'
console.log(numObj.toPrecision(5)); //'5.1235'
console.log(numObj.toPrecision(2)); //'5.1'
console.log(numObj.toPrecision(1)); //'5'

numObj = 0.000123;

console.log(numObj.toPrecision()); //'0.000123'
console.log(numObj.toPrecision(5)); //'0.00012300'
console.log(numObj.toPrecision(2)); //'0.00012'
console.log(numObj.toPrecision(1)); //'0.0001'
