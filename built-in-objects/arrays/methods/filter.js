/* 
[FILTER]

O método filter cria um novo array como os elementos que passaram na condição da função que foi data como parâmetro para o método.
Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões). 

Array.Prototype.filter
retorna um novo array com todos os elementos que atenderem a condição passada.

*/

//PARÂMETROS /FILTER
// (elem) Valor do elemento
// (index)	Índice em cada iteração, da esquerda para a direita
// (array)	Array original invocando o método
// (thisArg)	(opcional) Objeto que será referenciado como this no callback

const words = ["spray", "limit", "elite", "destruction", "presentation"];
const filteredWords = words.filter((word) => word.length > 5);
console.log(filteredWords); //[ 'destruction', 'presentation' ]

const array = [2, 4, 6, 8, -1, 5, -5, -8];
const filth = array.filter((number) => number > 0);
console.log(filth); //[ 2, 4, 6, 8, 5 ]

const arrayOfNumbers = [56, 66, 78, 8, 36, 36, 2, 56, 86, 36, 2, 1, 1, 10, 75, 78];
const filtered = arrayOfNumbers.filter((num, pos, arr) => arr.indexOf(num) == pos);
console.log(filtered); //[ 56, 66, 78, 8, 36, 2, 86, 1, 10, 75 ]
