/* 
[KEYS]

O método keys() de instâncias de Array retorna um novo objeto iterador de array que contém as chaves para cada índice no array.

Array.Prototype.keys

retorna um array iterator object
que contém as chaves de cada índice do array.
*/

const letters = ["a", "b", "c"];
const iterator = letters.keys();

// percorrendo o iterator
for (const key of iterator) {
  console.log(key); //0,1,2
}

// indices com valores
//  vazios também são considerados

const lettersWithHoles = ["a", , "c"];
const iteratorWithHoles = lettersWithHoles.keys();

for (const key of iteratorWithHoles) {
  console.log(key); //0,1,2
}
