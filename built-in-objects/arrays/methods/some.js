/*
[SOME]

O método some() de instâncias de Array testa se pelo menos um elemento do array passa no teste implementado pela função fornecida. Retorna verdadeiro se, no array, encontrar um elemento para o qual a função fornecida retorna verdadeiro; caso contrário, retornará falso. Não modifica a matriz.

Array.Prototype.every

retorna um booleano indicando se ALGUM dos elementos
do array satisfazem a condição passada como parâmetro.

*/

// verificando se todos os números são 1

const numbers = [1, 2, 3, 4, 5];
let times = 0;

const isOne = numbers.some((number) => {
  times++;
  return number === 1;
});

console.log(isOne); //true
console.log(times); //1
