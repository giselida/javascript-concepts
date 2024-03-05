/* 
[OF]

O método estático Array.of() cria uma nova instância de Array a partir de um número variável de argumentos, independentemente do número ou tipo dos argumentos.

Array.from
  
método estático que cria uma instância de
um array preenchendo com 
os elementos passados nos parâmetros

*/

console.log(Array.of("foo")); //[ 'foo' ]
console.log(Array.of(1, "a", false)); //[ 1, 'a', false ]
console.log(Array.of(null, undefined)); //[ null, undefined ]
console.log(Array.of("")); //[ '' ]
