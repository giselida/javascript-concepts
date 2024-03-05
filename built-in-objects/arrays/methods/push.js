/* 
[PUSH]

O “push()” serve para adicionarmos elementos no final do array

Array.prototype.push

adiciona um ou mais elementos ao final 
de um array e retorna o novo length do array.
*/

const animals = ["pig", "goat", "sheep"];

// Adicionando 1 item ao array
const count = animals.push("cow");
console.log(count); // 4
console.log(animals); //[ 'pig', 'goat', 'sheep', 'cow' ]

// Adicionando vários itens ao array
animals.push("chicken", "cat", "dog");
console.log(animals); //[ 'pig', 'goat', 'sheep', 'cow', 'chicken', 'cat', 'dog' ]

// Mesclando arrays com push + spread operator

const listVegetables = ["parsnip", "potato"];
const listMoreVegs = ["celery", "beetroot"];

listVegetables.push(...listMoreVegs);
console.log(listVegetables); //[ 'parsnip', 'potato', 'celery', 'beetroot' ]

// Mesclando arrays utilizando o método apply

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); //[ 'parsnip', 'potato', 'celery', 'beetroot' ]
