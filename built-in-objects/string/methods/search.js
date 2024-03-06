/* 
[search]

retorna a primeira ocorrência de um determinado pedaço de em uma string.

String.Prototype.search

retorna a posição de um valor específico via expressão regular.

*/

const message = "Mr. Blue has a blue house";

let result = message.search("Blue");
console.log(result); //4

result = message.search("Hi");
console.log(result); //-1

result = message.search(/blue/g);
console.log(result); //15
