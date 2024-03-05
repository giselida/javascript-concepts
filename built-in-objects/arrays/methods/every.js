/* 
[EVERY]

O método every() de instâncias de Array testa se todos os elementos do array passam no teste implementado pela função fornecida. Ele retorna um valor booleano.

Array.prototype.every

retorna um booleano indicando se TODOS os elementos
do array satisfazem a condição passada como parâmetro.

*/

// verificando se todas as letras são 'a'

const letters = ["a", "b", "c", "c", "c"];
let times = 0;

const hasA = letters.every((letter) => {
  times++;
  return letter === "a";
});

console.log(hasA); //false
console.log(times); //2
