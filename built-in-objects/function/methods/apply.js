/*
[apply()]

O método apply() de instâncias de Function chama esta função com um determinado valor this e argumentos fornecidos como um array (ou um objeto semelhante a um array).

*/
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
console.log(max); //7

const min = Math.min.apply(null, numbers);
console.log(min); //2

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); //[ 'a', 'b', 0, 1, 2 ]
