/* 
[FILL]

O método fill() de instâncias de Array altera todos os elementos dentro de um intervalo de índices em um array para um valor estático. Ele retorna o array modificado.

Array.Prototype.fill
  
preenche todos os elementos de um array com um determinado valor.

*/

const numbers = [1, 2, 3, 4];

// preenchendo todo o array
console.log(numbers.fill(6)); //[ 6, 6, 6, 6 ]

// preenchendo com 0 da posição 2 até a posição 4
console.log(numbers.fill(0, 2, 4)); //[ 6, 6, 0, 0 ]

// preenchendo com 5 a partir da posição 1
console.log(numbers.fill(5, 1)); //[ 6, 5, 5, 5 ]
