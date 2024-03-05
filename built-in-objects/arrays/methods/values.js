/* 
[VALUES]
Array.Prototype.values

O método values() de instâncias de Array retorna um novo objeto iterador de array que itera o valor de cada item no array.
*/

const letters = ["a", "b", "c"];
const iterator = letters.values();

// percorrendo o iterator
for (const value of iterator) {
  console.log(value); // 'a', 'b', 'c'
}

// indices vazios também são considerados

const lettersWithHoles = ["a", , "c"];
const iteratorWithHoles = lettersWithHoles.values();

for (const value of iteratorWithHoles) {
  console.log(value); // 'a', undefined, 'c'
}
