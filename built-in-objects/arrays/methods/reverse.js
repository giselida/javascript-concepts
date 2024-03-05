/* 
[REVERSE]

O “reverse()” inverte a ordem dos elementos do nosso array

Array.prototype.reverse

inverte a ordem dos elementos de 
um array e retorna a referencia 
para o mesmo array

*/
const array3 = ["branco", 10, 20, 30, "novo elemento"];
array3.reverse();
console.log(array3); //[ 'novo elemento', 30, 20, 10, 'branco' ]

const positions = ["one", "two", "three"];
console.log(positions); //[ 'one', 'two', 'three' ]
const reversed = positions.reverse();
console.log(reversed); //[ 'three', 'two', 'one' ]

// Cuidado : a reversão é aplicada ao array original
console.log(positions); //[ 'three', 'two', 'one' ]

// Invertendo os elementos de array-like object
const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log(arrayLike); //{ 0: 1, 1: 2, 2: 3, length: 3 }
Array.prototype.reverse.call(arrayLike);
console.log(arrayLike); //{ 0: 3, 1: 2, 2: 1, length: 3 }
