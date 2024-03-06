/* 
[repeat()]

O método repeat() de valores String constrói e retorna uma nova string que contém o número especificado de cópias desta string, concatenadas.

String.Prototype.repeat

retorna uma nova string com um número especificado de cópias da string passado no parâmetro da chamada.

*/

const message = "Hello world!";

let result = message.repeat(2);
console.log(result); //'Hello world!Hello world!'

result = message.repeat(0);
console.log(result); //''
