/* 
[charAt()]

O método charAt() de valores String retorna uma nova string que consiste em uma única unidade de código UTF-16 no índice fornecido.

charAt() sempre indexa a string como uma sequência de unidades de código UTF-16, portanto pode retornar substitutos solitários. Para obter o ponto de código Unicode completo no índice fornecido, use String.prototype.codePointAt() e String.fromCodePoint().

String.Prototype.charAt

retorna o carácter de um determinado índice.
*/

const message = "HELLO WORLD";
const letter = message.charAt(message.length - 1);
const result = `The last letter is : ${letter}`;
console.log(result); //'The last letter is : D'

// utilizando charAt para capitalizar
// a primeira letra de uma palavra

const message2 = "hello";
const capitalizedMsg = `${message2.charAt(0).toUpperCase()}${message2.slice(1)}`;
console.log(capitalizedMsg); //'Hello'

// utilizando charAt para capitalizar
// recuperar a última letra palavra

const message3 = "HELLO WORLD";
const letter3 = message3.charAt(2);
const result3 = `The last letter is : ${letter3}`;
console.log(result3); //"The last letter is : L";
