/* 
[MAP]

Este método cria um novo array e executa uma função sobre cada um dos items do array fonte.

Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.

O que map() faz: percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento com parâmetros. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, map() retorna o novo array com todos os elementos “traduzidos”.

Array.Prototype.map
projetar um novo array a partir do array
passado como parâmetro.
*/

//PARÂMETROS /MAP
// (elem) Valor do elemento
// (index)	Índice em cada iteração, da esquerda para a direita
// (array)	Array original invocando o método
// (thisArg)	(opcional) Objeto que será referenciado como this no callback

const numbers = [1, 4, 9, 16];
const squaredNumbers = numbers.map((x) => x ** 2);
console.log(squaredNumbers); // [ 1, 16, 81, 256 ]

const numberArray = [10, 1, 2, 3, 4, 5, 12, 25, 12, 23, 5, 22, 5];
const numberMapped = numberArray.map((number, index, arr) => number * 3);
console.log(numberMapped); //[ 30, 3, 6, 9, 12, 15, 36, 75, 36, 69, 15, 66, 15 ]

const numbersFiltered = numberMapped.map((number) => number % 2 == 0);
console.log(numbersFiltered); //[ true,false,true,false,true,false,true,false,true,false,false,true,false ]

const wordArray = ["Gisélida", "joão", "anna"];
const multiFist = wordArray.map((elem, pos, list) => elem + "s");
console.log(multiFist); // [ 'Gisélidas', 'joãos', 'annas' ]
