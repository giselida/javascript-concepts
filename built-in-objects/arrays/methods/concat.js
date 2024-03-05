/* 
[CONCAT]

O método concat() é usado para combinar dois ou mais arrays em um único array

Array.Prototype.concat
retorna um novo array mesclando dois ou mais arrays.
este método não altera os arrays existentes, mas retorna um novo array.

*/

//mesclando 2 arrays
const listLetters = ["a", "b", "c"];
const listNumbers = [1, 2, 3];

const mergedArray = listLetters.concat(listNumbers);
console.log(mergedArray); //[ 'a', 'b', 'c', 1, 2, 3 ]

// mesclando 3 arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log(numbers); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// mesclando valores primitivos e arrays

const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3], 4);
console.log(alphaNumeric); //[ 'a', 'b', 'c', 1, 2, 3, 4 ]
