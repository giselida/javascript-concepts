/* 
[FOREACH]

Este método faz um loop sobre cada um dos itens do array.

Array.Prototype.forEach

percorre os itens de um array, executando um callback para cada iteração.

*/

const numbers = [1, 4, 9, 16];
numbersSquared = numbers.forEach((item) => console.log(item));
console.log(numbersSquared); //undefined

const arr4 = [2, 4, 6, 8];
arr4.forEach((num) => {
  console.log(num); //2, 4, 6, 8
});
