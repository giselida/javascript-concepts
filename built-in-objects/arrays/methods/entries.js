/*
[ENTRY]

O método Entry() de instâncias de Array retorna um novo objeto iterador de array que contém os pares chave/valor para cada índice no array.

Array.Prototype.entries

retorna um iterator object que contem um 
key/value pair para cada índice do array 
*/

// exibindo os key/value pairs

const letters = ["a", "b", "c"];
const iterator = letters.entries();

console.log(iterator); //{ [Iterator] }

for (let e of iterator) {
  console.log(e); //[ 0, 'a' ], [ 1, 'b' ],[ 2, 'c' ]
}

// Iterando com índice e elemento

const letters2 = ["a", "b", "c"];

for (const [index, element] of letters2.entries()) console.log(index, element); //0 'a',1 'b',2 'c'
