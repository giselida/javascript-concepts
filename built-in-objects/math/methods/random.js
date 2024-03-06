/*
[Math.random()]

O método estático Math.random() retorna um número pseudoaleatório de ponto flutuante que é maior ou igual a 0 e menor que 1, com distribuição aproximadamente uniforme nesse intervalo - que você pode então dimensionar para o intervalo desejado. A implementação seleciona a semente inicial para o algoritmo de geração de números aleatórios; ele não pode ser escolhido ou redefinido pelo usuário.

*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3)); //0

console.log(getRandomInt(1)); //0

console.log(Math.random()); //0.5800852462833888
