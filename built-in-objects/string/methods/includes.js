/* 
[include()]

O método include() de valores String executa uma pesquisa que diferencia maiúsculas de minúsculas para determinar se uma determinada string pode ser encontrada dentro desta string, retornando verdadeiro ou falso conforme apropriado.
String.Prototype.includes

verifica se uma string contém todos os caracteres de uma string especificada.

*/

const message = "Hello world, welcome to the universe.";
let result = message.includes("world");
console.log(result); //true

result = message.includes("w");
console.log(result); //true

result = message.includes("world", 10);
console.log(result); //false
