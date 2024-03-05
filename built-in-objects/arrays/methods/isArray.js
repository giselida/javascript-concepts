/* 
[ISARRAY]

O método estático Array.isArray() determina se o valor passado é um Array.

Array.isArray

verifica se um objeto é um array.
*/

const numbers = [1, 2, 3];
const number = 2;
const name = "John";
const person = { name: "John", age: 32 };

console.log(Array.isArray(numbers)); //true
console.log(Array.isArray(number)); //false
console.log(Array.isArray(name)); //false
console.log(Array.isArray(person)); //false

function foo() {
  console.log(Array.isArray(arguments)); //false
}

foo();
