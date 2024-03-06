/*
[matchAll()]

O método matchAll() de valores String retorna um iterador de todos os resultados que correspondem a esta string em relação a uma expressão regular, incluindo a captura de grupos.

String.prototype.matchAll()

*/
const expression = /test/g;
const message = "test1test2";

const result = [...message.matchAll(expression)];

console.log(result.length); //2
console.log(result); //[ [ 'test', index: 0, input: 'test1test2', groups: undefined ],[ 'test', index: 5, input: 'test1test2', groups: undefined ] ]

const [match] = result[0];
const { index, input, groups } = result[0];
console.log(match); //'test'
console.log(index); //0
console.log(input); //test1test2
console.log(groups); //undefined
