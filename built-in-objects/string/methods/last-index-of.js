/* 
[lastIndexOf]

retorna a primeira posição de um determinado pedaço dentro de uma string,(final da string), lastIndexOf retorna a ultima ocorrência.

String.Prototype.lastIndexOf

retorna a índice da última ocorrência de um valor ou parte dele em uma string.

*/

const message = "Hello planet earth, you are a great planet.";
let result = message.lastIndexOf("planet");
console.log(result); //36

result = message.lastIndexOf("planet", 11);
console.log(result); //6

result = message.lastIndexOf("planet", 5);
console.log(result); //-1
