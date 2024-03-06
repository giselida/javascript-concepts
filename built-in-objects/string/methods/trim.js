/* 
[trim()]

O método trim() de valores String remove espaços em branco de ambas as extremidades desta string e retorna uma nova string, sem modificar a string original.

Para retornar uma nova string com espaços em branco cortados em apenas uma extremidade, use trimStart() ou trimEnd().

String.Prototype.trim

retorna uma nova string removendo os espaços em branco do início e final.

*/

const names = ["  Richard    ", "Hi There  "];
const trimmedNames = names.map((name) => name.trim());
console.log(trimmedNames); //[ 'Richard', 'Hi There' ]
