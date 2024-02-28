/*
[for in]

A instrução for...in itera sobre todas as propriedades de string enumeráveis de um objeto (ignorando propriedades codificadas por símbolos), incluindo propriedades enumeráveis herdadas.

[Syntax]

for (variable in object)
  statement

[variable]
Recebe um nome de propriedade de string em cada iteração. Pode ser uma declaração com const, let ou var, ou um alvo de atribuição (por exemplo, uma variável declarada anteriormente, uma propriedade de objeto ou um padrão de atribuição de desestruturação). Variáveis declaradas com var não são locais para o loop, ou seja, estão no mesmo escopo em que o loop for...in está.

[object]
Objeto cujas propriedades enumeráveis sem símbolo são iteradas.

[statement]
Uma instrução a ser executada em cada iteração. Pode fazer referência à variável. Você pode usar uma instrução de bloco para executar várias instruções.
*/

forInStatement: {
  const numbers = [10, 20, 30];
  const letters = ["a", "b", "c"];
  const objects = [{ name: "a" }, { name: "b" }, { name: "c" }];

  for (const number in numbers) {
    console.log(number); //0 1 2
  }

  for (const letter in letters) {
    console.log(letter); //0 1 2
  }

  for (const object in objects) {
    console.log(object); //0 1 2
  }
}
forInStatement1: {
const capitals = {
  a: "Athens",
  b: "Belgrade",
  c: "Cairo",
};

for (let key in capitals) {
  console.log(key + ": " + capitals[key]); //'a: Athens' 'b: Belgrade'​ 'c: Cairo'
}
}
