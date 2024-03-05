/*
[SORT]

Este método e utilizado para arranjar ou ordenar os itens de um array de maneira ascendente ou descendente.
*/
const arr = [2, 4, 6, 8];
const alpha = ["d", "c", "b", "a"];

const descendente = arr.sort();
console.log(descendente); //[ 2, 4, 6, 8 ]

const arr2 = [2, 4, 6, 8];
const alpha2 = ["d", "c", "b", "a"];
const ascendente = arr2.sort((a, b) => b - a);
console.log(ascendente); //[ 8, 6, 4, 2 ]
