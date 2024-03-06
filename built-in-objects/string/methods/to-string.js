/*
[toString()]

O método toString() de valores String retorna este valor string.

String.prototype.toLocaleUpperCase()

*/

const stringObj = new String("foo");

console.log(stringObj); //String 'foo' { [Iterator]  0: 'f', 1: 'o', 2: 'o' }

console.log(stringObj.toString()); //"foo";
