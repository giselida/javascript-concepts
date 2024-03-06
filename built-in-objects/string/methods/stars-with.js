/*
[startWith()]

O método startWith() de valores String determina se esta string começa com os caracteres de uma string especificada, retornando verdadeiro ou falso conforme apropriado.

String.prototype.startsWith()

*/
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat")); //true

console.log(str1.startsWith("Sat", 3)); //false
