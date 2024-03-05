/*
[FINDINDEX]

O método findIndex() de instâncias de Array retorna o índice do primeiro elemento em um array que satisfaz a função de teste fornecida. Se nenhum elemento satisfizer a função de teste, -1 será retornado.

Veja também o método find(), que retorna o primeiro elemento que satisfaz a função de teste (em vez de seu índice).
Array.Prototype.findIndex

retorna o índice do primeiro elemento do array que atender a condição passada.
  
*/

const numbers = [1, 4, 9, 16];
const foundedIndexNumberGreaterThan5 = numbers.findIndex((number) => number > 5);
const foundedIndexNumberGreaterThan20 = numbers.findIndex((number) => number > 20);
console.log(foundedIndexNumberGreaterThan5); //2
console.log(foundedIndexNumberGreaterThan20); //-1

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const foundedIndexFruit = fruits.findIndex((fruit) => fruit === "blueberries");
console.log(foundedIndexFruit); //3
