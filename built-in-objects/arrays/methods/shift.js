/* 
[SHIFT]

O “shift()” é o contrário do “pop()”, ele remove o PRIMEIRO elemento do array

Array.prototype.shift

remove e retorna o primeiro item de um array.
*/

const plants = ["broccoli", "cauliflower", "tomato"];
const removedPlant = plants.shift();
console.log(removedPlant); //'broccoli'
console.log(plants); //["cauliflower", "tomato"];

console.log(plants.shift()); //'cauliflower'
console.log(plants); //[ 'tomato' ]

console.log(plants.shift()); //"tomato";
console.log(plants); //[]

console.log(plants.shift()); //undefined
console.log(plants); //[]

const firstItem = ["gih", "anna"];
const remover = firstItem.shift();
console.log(remover); //'gih' ​​​​
