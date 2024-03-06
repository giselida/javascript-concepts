/* 
[indexOf]

retorna a primeira posição de um determinado pedaço dentro de uma string, indexOf retorna a primeira ocorrência.(inicio da string)

String.Prototype.indexOf

retorna a posição da primeira ocorrência de um valor especificado em uma string.

*/

const message = "Hello world, welcome to the universe.";
let result = message.indexOf("world");
console.log(result);

result = message.indexOf("to");
console.log(result);

result = message.indexOf("world", 10);
console.log(result);
