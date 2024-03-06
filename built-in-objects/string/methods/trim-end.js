/* 
[trimEnd()]

O método trimEnd() de valores String remove espaços em branco do final desta string e retorna uma nova string, sem modificar a string original. trimRight() é um alias deste método.

String.Prototype.trimEnd()

*/

const greeting = "   Hello world!   ";

console.log(greeting); //'   Hello world!   '

console.log(greeting.trimEnd()); //'   Hello world!'
