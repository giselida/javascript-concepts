/* 
[FLATMAP]

O método flatMap() de instâncias de Array retorna um novo array formado pela aplicação de uma determinada função de retorno de chamada a cada elemento do array e, em seguida, nivelando o resultado em um nível. É idêntico a map() seguido por flat() de profundidade 1 (arr.map(...args).flat()), mas um pouco mais eficiente do que chamar esses dois métodos separadamente.

Array.Prototype.flatMap

retorna um novo array, executando uma função de callback 
para cada elemento do array e então 'planificando' 
o resultado em 1 nível.

por padrão o nível de profundidade é 1

*/

const sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome", "Wonderful"];

let words = sentences.map((s) => s.split(" "));
let flattenWords = sentences.flatMap((s) => s.split(" "));
console.log(words); //[ [ 'JavaScript', 'Array', 'flatMap()' ],[ '', '' ],[ 'is' ],[ '', '' ],[ 'Awesome' ],[ 'Wonderful' ] ]
console.log(flattenWords); //[ 'JavaScript','Array','flatMap()','','','is','','','Awesome','Wonderful' ]

const people = [
  { name: "João", friends: [{ name: "Gabriel" }, { name: "Laura" }] },
  { name: "Maria", friends: [{ name: "Bruna" }, { name: "Luzia" }] },
  { name: "Rebeca", friends: [{ name: "Gustavo" }] },
];

const allFriends = people.flatMap((c) => c.friends);
console.log(allFriends); //[{ name: "Gabriel" }, { name: "Laura" }, { name: "Bruna" }, { name: "Luzia" }, { name: "Gustavo" }];
