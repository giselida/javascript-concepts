/* 
[slice]

O método slice extrai uma parte de uma string e retorna a parte extraída em uma nova string.
O método tem dois parâmetros: o índice inicial (posição), e o índice final (posição).

String.Prototype.slice

extrai e retorna uma parte de uma string, sem modificar a string original.

*/

const name1 = "Richard";
const splitted = name1.slice(1);
console.log(name1); //'Richard'
console.log(splitted); //'ichard'

const name2 = "Richard";
const splitted2 = name2.slice(0, 3);
console.log(name2); //Richard
console.log(splitted2); //'Ric'
