/* 
[replaceAll()]

O método replaceAll() de valores String retorna uma nova string com todas as correspondências de um padrão substituídas por uma substituição. O padrão pode ser uma string ou RegExp, e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. A string original permanece inalterada.

String.Prototype.replaceAll


*/

const message = "Mr Blue has a blue house and a blue car";

let result = message.replaceAll("blue", "RED");
console.log(result); //'Mr Blue has a RED house and a RED car'

result = message.replaceAll(/blue/g, "RED");
console.log(result); //'Mr Blue has a RED house and a RED car'

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey")); //'I think Ruth\'s monkey is cuter than your monkey!'
