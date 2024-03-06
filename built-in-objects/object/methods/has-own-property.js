/*
[hasOwnProperty()]

O método hasOwnProperty() de instâncias de Object retorna um booleano indicando se este objeto tem a propriedade especificada como sua própria propriedade (em vez de herdá-la).

*/
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1")); //true

console.log(object1.hasOwnProperty("toString")); //false

console.log(object1.hasOwnProperty("hasOwnProperty")); //false
