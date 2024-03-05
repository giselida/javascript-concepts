/*
[REDUCE]

Este método cria um acumulador ou reduz o array a um valor único utilizando uma função que cria um valor único.
Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de um array.

Array.Prototype.reduce
reduzir uma coleção de itens a um único valor.
*/

//PARÂMETROS /REDUCE
// (elem) Valor do elemento
// (index)	Índice em cada iteração, da esquerda para a direita
// (array)	Array original invocando o método
// (thisArg)	(opcional) Objeto que será referenciado como this no callback

const persons = [
  { name: "John Doe", earthShape: "Flat", QI: -320 },
  { name: "Jane Doe", earthShape: "Flat", QI: -718 },
  { name: "Mark Richard", earthShape: "Round", QI: -500 },
  { name: "Paul Phillips", earthShape: "Round", QI: 15 },
];
const maxQi = persons.reduce((obj, item) => {
  return obj.QI > item.QI ? obj : item;
});
console.log(maxQi); //{ name: 'Paul Phillips', earthShape: 'Round', QI: 15 }

const arr1 = [2, 4, 6, 8];
const soma = arr1.reduce((total, curr) => total + curr, 0);
console.log(soma); //20
