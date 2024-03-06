/* 
[Symbol.iterator]

O método [@@iterator]() de valores String implementa o protocolo iterável e permite que strings sejam consumidas pela maioria das sintaxes que esperam iteráveis, como a sintaxe de propagação e os loops for...of. Ele retorna um objeto iterador de string que produz os pontos de código Unicode do valor da string como strings individuais.

String.Prototype.[Symbol.iterator]
  
retorna um novo iterator object que itera sobre
os caracteres de uma string.

*/
// Exemplos

const str = "abc";
const iterator = str[Symbol.iterator]();

console.log(iterator.next()); //{ value: 'a', done: false }
console.log(iterator.next()); //{ value: 'b', done: false }
console.log(iterator.next()); //{ value: 'c', done: false }
console.log(iterator.next()); //{ value: undefined, done: true }
