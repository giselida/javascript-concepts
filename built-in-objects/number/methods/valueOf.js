/*
[valueOf()]

O método valueOf() de valores numéricos retorna o valor deste número.

Number.prototype.valueOf
           
retorna o valor primitivo contido
em um objeto Number
    
*/

let numObj = new Number(10);
console.log(typeof numObj); //'object'

let num = numObj.valueOf();
console.log(num); //10
console.log(typeof num); //'number'
