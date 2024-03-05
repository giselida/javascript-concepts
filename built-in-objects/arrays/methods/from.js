/* 
[FROM]

O método estático Array.from() cria uma nova instância de Array copiada superficialmente a partir de um objeto iterável ou semelhante a um array.  

Array.from

método estático que cria um array a partir 
de um array-like ou iterable object.

*/

// gerando um array a partir de uma string
console.log(Array.from("foo")); //[ 'f', 'o', 'o' ]

// gerando um array a partir de um set
const set = new Set(["foo", "bar", "baz", "foo"]);
console.log(Array.from(set)); //[ 'foo', 'bar', 'baz' ]

// gerando um array a partir array-like (arguments)
function createArray() {
  return Array.from(arguments);
}
console.log(createArray(1, 2, 3)); //[ 1, 2, 3 ]

// criando um array e projetando

console.log(Array.from([1, 2, 3], (x) => x + x)); //[ 2, 4, 6 ]
