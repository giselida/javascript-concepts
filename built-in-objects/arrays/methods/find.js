/* 
[FIND]
O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.

Use find() quando: é preciso procurar/verificar por um valor dentro de um array/objeto. 
Em outras palavras, use find() para criar um novo array/objeto baseado na função-teste fornecida.

Array.Prototype.find
retorna o primeiro elemento do array que atender a condição passada.

*/

const listInitial = [9, 2, 4, 67, 10, 15, 32, 9];
const number = 15;
const findValue = listInitial.find((value) => value === number);
console.log(findValue); //15

const list = ["Gabriel", "Lucas", "Jonas"];
const found = list.find((person) => person.endsWith("s"));
console.log(found); //Lucas

const numbers = [1, 4, 9, 16];
const foundedNumber = numbers.find((number) => number > 5);
console.log(foundedNumber); //9
