/* 
[INCLUDES]

Este método checa se o array inclui em seus items o valor passado como parâmetro.
O método includes() determina se um array/objeto contém um determinado elemento ou não, retornando true ou false, respectivamente. Em outras palavras, includes() retornará true se o elemento existir no array/objeto.
Use includes() quando: é preciso saber se um array/objeto possui determinado valor/elemento.

Array.includes

verifica se um array possui 
um determinado valor entre seus itens.

*/

const numbers = [1, 2, 3];

console.log(numbers.includes(2));

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat")); //true
console.log(pets.includes("at")); //false

/*
   Se o índice inicial for maior ou 
   igual ao comprimento da array,
   será retornado falso. E o array não será pesquisado.
*/

const letters = ["a", "b", "c"];
console.log(letters.includes("c", 3)); //false
console.log(letters.includes("c", 100)); //false

const array = ["bolo de coco", "bernardo"];
console.log(array);
console.log(array.includes("bolo de coco", "bernardo")); //true
