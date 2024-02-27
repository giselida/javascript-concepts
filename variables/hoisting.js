/*
[Hoisting]

é quando as declarações de varáveis, function declarations e classes
são movidas para o topo de seu escopo.

Basicamente, quando o Javascript compila o seu código, todas as declarações de variáveis usando var são hoistiadas levadas ao topo de suas funções/escopo local (se declaradas dentro de uma função), ou ao topo do escopo global (se declaradas fora de uma função) independentemente de onde a declaração foi feita. Isto é o que queremos dizer com “hoisting”.

As declarações de funções também são hoistiadas, mas elas irão para a parte mais alta do escopo, por isso ficará acima de todas as declarações de variáveis.

Com isso é possível utilizar uma variável ou função antes de ser declarada.
*/
console.log(myName); //undefined
var myName = "Bob";


var secondName;
console.log(secondName); //undefined
secondName = "Sabrina";


const myCatName = catName("Chloe");
console.log(myCatName);

console.log(greeting); //undefined
// undefined pois somente a declaração
// foi movida para o topo e não a atribuição do valor

function catName(name) {
  return `O nome do meu gato é ${name}`;
}

var greeting = "Hello World";

