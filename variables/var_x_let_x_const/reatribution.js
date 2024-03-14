/*
A diferença entre var, let e const está relacionada ao escopo e à reatribuição de valores das variáveis. var tem escopo de função e permite a redeclaração e reatribuição de valores. let tem escopo de bloco e permite a reatribuição de valores. const tem escopo de bloco e declara uma variável de valor constante, que não pode ser alterada após a atribuição inicial.

const define uma referência constante a um valor. Isso significa que a referência não pode ser alterada. Você não pode reatribuir um novo valor a ela.

*/
var idade = 18;
idade = 1;
console.log(idade); //1

let idade2 = 18;
idade2 = 10;
console.log(idade2); //10

const idade3 = 18;
idade3 = 7; //Assignment to constant variable.
console.log(idade2); //18
