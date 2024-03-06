/*
[split()]

O método split() de valores String pega um padrão e divide essa string em uma lista ordenada de substrings procurando o padrão, coloca essas substrings em um array e retorna o array.

*/

//possível converter uma string em array usando o método split
//SYNTAX
//split(separator)
//split(separator, limit);

const name = "nome";
const list = name.split("");
console.log(list); //[ 'n', 'o', 'm', 'e' ]
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]); //''fox

const chars = str.split("");
console.log(chars[8]); //''k

const strCopy = str.split();
console.log(strCopy); //[ 'The quick brown fox jumps over the lazy dog.' ]
