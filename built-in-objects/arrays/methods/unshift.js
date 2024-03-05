/* 
[UNSHIFT]

O “unshift()” faz o contrário do que o “push()” faz, ele adiciona um elemento no início de um array
 
Array.prototype.push

adiciona um ou mais elementos ao ínicio 
de um array e retorna o novo length do array.
*/

const animals = ["pig", "goat", "sheep"];

// Adicionando 1 item
const count = animals.unshift("cow");
console.log(count); //4
console.log(animals); //[ 'cow', 'pig', 'goat', 'sheep' ]

// Adicionando vários itens
animals.unshift("chicken", "cat", "dog");
console.log(animals); //[ 'chicken', 'cat', 'dog', 'cow', 'pig', 'goat', 'sheep' ]

// Mesclando arrays com unshift + spread operator

const listVegetables = ["parsnip", "potato"];
const listMoreVegs = ["celery", "beetroot"];

listVegetables.unshift(...listMoreVegs);
console.log(listVegetables); //[ 'celery', 'beetroot', 'parsnip', 'potato' ]

// Mesclando arrays utilizando o método apply

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

Array.prototype.unshift.apply(vegetables, moreVegs);
console.log(vegetables); //[ 'celery', 'beetroot', 'parsnip', 'potato' ]
