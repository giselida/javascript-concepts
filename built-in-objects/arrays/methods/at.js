/*
[AT]

O método at() de instâncias de Array pega um valor inteiro e retorna o item naquele índice, permitindo números inteiros positivos e negativos. Inteiros negativos contam regressivamente a partir do último item da matriz.

*/

const array1 = [5, 12, 8, 130, 44];
const result = array1.at(-2);
console.log(result); //130

const array2 = [5, 12, 8, 130, 44];
const result2 = array2.at(0);
console.log(result2); //5
