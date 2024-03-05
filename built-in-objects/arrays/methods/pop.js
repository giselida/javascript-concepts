/* 
[POP]

O “pop()” remove o último elemento de um array

Array.prototype.pop

remove e retorna o ultimo item de um array.

*/

const item = ["bala", "pirulito", "doce"];
const pop = item.pop();
console.log(pop); //'doce'
console.log(item); //[ 'bala', 'pirulito' ]

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
const removedPlant = plants.pop();
console.log(removedPlant); //'tomato'
console.log(plants); //[ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]
plants.pop();
console.log(plants); //[ 'broccoli', 'cauliflower', 'cabbage' ]

const fishes = ["angel", "clown", "mandarin", "sturgeon"];
const popped = fishes.pop();
console.log(popped); //'sturgeon'
console.log(fishes); //[ 'angel', 'clown', 'mandarin' ]
fishes.pop();
console.log(fishes); //[ 'angel', 'clown' ]
fishes.pop();
console.log(fishes); //[ 'angel' ]
fishes.pop();
console.log(fishes); // []
console.log(fishes.pop()); //undefined
