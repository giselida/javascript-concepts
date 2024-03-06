/*
[length]

A propriedade de dados de comprimento de um valor String contém o comprimento da string em unidades de código UTF-16.

retorna o tamanho da string.
*/
const str = "Hello joão";
console.log(str.length); // 5

// A tentativa de atribuir um valor à propriedade .length
// de uma string não tem nenhum efeito.

const myString = "bluebells";
myString.length = 4;
console.log(myString); //'bluebells'
console.log(myString.length); // 9
