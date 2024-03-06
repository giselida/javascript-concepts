/* 
[trimStart()]

O método trimStart() de valores String remove os espaços em branco do início desta string e retorna uma nova string, sem modificar a string original. trimLeft() é um alias deste método.

String.Prototype.trimStart()

*/

const greeting = "   Hello world!   ";

console.log(greeting); // "   Hello world!   "

console.log(greeting.trimStart()); //"Hello world!   "
