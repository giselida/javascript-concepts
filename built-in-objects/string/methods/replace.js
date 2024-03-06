/* 
[replace]

O método replace substitui um determinado valor em uma string por outro valor.

String.Prototype.replace

retorna uma nova string substituindo o valor passado por parâmetro por um novo valor.

*/

const message = "Mr Blue has a blue house and a blue car";

let result = message.replace("blue", "RED");
console.log(result); //'Mr Blue has a RED house and a blue car'

result = message.replace(/blue/g, "RED");
console.log(result); //'Mr Blue has a RED house and a RED car'
