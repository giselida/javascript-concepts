/* 
[SLICE]

O “slice()” extrai uma sessão de um array e retorna um novo array,

Array.Prototype.slice

extrai e retorna uma parte de uma array, sem modificar o array original
obs: índice final não é incluído
*/

const array1 = [1, 2, 3, 4, 5, 6];
const result1 = array1.slice(0, 4);
console.log(result1); //[ 1, 2, 3, 4 ]

const letters = ["A", "B", "C", "D"];
const splittedLetters = letters.slice(1, 3);
console.log(letters); //[ 'A', 'B', 'C', 'D' ]
console.log(splittedLetters); // [ 'B', 'C' ]

const months = ["Jan", "March", "April"];
const days = ["Monday", "Tuesday", "Wednesday"];

const removedMonths = months.slice(1, 0);
const removedDays = days.slice(3, 2);

console.log(removedMonths); //[]
console.log(removedDays); //[]
