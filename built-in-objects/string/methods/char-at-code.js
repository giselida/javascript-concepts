/* 
[charCodeAt()]

O método charCodeAt() de valores String retorna um número inteiro entre 0 e 65535 representando a unidade de código UTF-16 no índice fornecido.

charCodeAt() sempre indexa a string como uma sequência de unidades de código UTF-16, portanto, pode retornar substitutos solitários. Para obter o ponto de código Unicode completo no índice fornecido, use String.prototype.codePointAt().

String.Prototype.charCodeAt

*/

const message = "HELLO WORLD";
const letter = message.charCodeAt(message.length - 1);
const result = `The last letter is : ${letter}`;
console.log(result); //'The last letter is : 68'

// utilizando charAt para capitalizar
// a primeira letra de uma palavra

const message2 = "hello";
const capitalizedMsg = `${message2.charCodeAt(0)}`;
console.log(capitalizedMsg); //'104'

// utilizando charAt para capitalizar
// recuperar a última letra palavra

const message3 = "HELLO WORLD";
const letter3 = message3.charCodeAt(2);
const result3 = `The last letter is : ${letter3}`;
console.log(result3); //"The last letter is : 76";
