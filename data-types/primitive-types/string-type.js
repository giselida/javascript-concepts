/*
[String]
Esta é uma sequência de texto conhecida como string. Para indicar que o valor é uma string, coloque-o entre aspas simples ou duplas ou crase. 
 */
const singleString = 'string';
const doubleString = "string";
const crasisString =  `string`;
/* Dica : Você pode utilizar os [ Template literals ] (Template strings) ao usar ``  */
 
const exemple = `Exemplo de um (Template literals)=>  ${crasisString}`;
const five = 5;
const teen = 10;

console.log(`Fifteen is ${five + teen} and not ${2 * five + teen}.`);//"Fifteen is 15 and not 20."