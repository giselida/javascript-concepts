/* 
[match()]

O método match() de valores String recupera o resultado da correspondência desta string com uma expressão regular.

String.Prototype.match

aplica uma expressão regular e retorna as correspondências como um array.

*/

const message = "The rain in SPAIN plain";
let result = message.match(/ain/g);
console.log(result);
["ain", "ain"];

result = message.match("rain");
console.log(result); //[ 'rain',index: 4,input: 'The rain in SPAIN plain',groups: undefined ]

result = message.match(/[A-Z]/g);
console.log(result); //[ 'T', 'S', 'P', 'A', 'I', 'N' ]

result = message.match(/u/g);
console.log(result); //null
