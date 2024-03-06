/* 
[endsWith()]
O método endsWith() de valores String determina se uma string termina com os caracteres desta string, retornando verdadeiro ou falso conforme apropriado.

String.Prototype.endsWith

verifica se uma string termina com os caracteres de uma string especificada.

*/

const message = "Hello world, welcome to the universe.";
let result = message.endsWith("universe.");
console.log(result); //true
result = message.endsWith("world", 11);
console.log(result); //true
result = message.endsWith("world");
console.log(result); //false
