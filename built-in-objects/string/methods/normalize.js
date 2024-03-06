/* 
[normalize()]

O método normalize() de valores String retorna o formulário de normalização Unicode desta string.
String.Prototype.normalize

retorna a forma unicode normalizada de uma string.

*/

const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

console.log(`${name1}, ${name2}`); //'Amélie, Amélie'
console.log(name1 === name2); //false
console.log(name1.length === name2.length); //false

const name1NFC = name1.normalize();
const name2NFC = name2.normalize();

console.log(`${name1NFC}, ${name2NFC}`); //'Amélie, Amélie'
console.log(name1NFC === name2NFC); //true
console.log(name1NFC.length === name2NFC.length); //true
