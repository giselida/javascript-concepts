/*
[for of]

O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto argument (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

[Syntax]

for (variable of iterable)
  statement

[variable]
Recebe um valor da sequência em cada iteração. Pode ser uma declaração com const, let ou var, ou um alvo de atribuição (por exemplo, uma variável declarada anteriormente, uma propriedade de objeto ou um padrão de atribuição de desestruturação). Variáveis declaradas com var não são locais para o loop, ou seja, elas estão no mesmo escopo em que o loop for...of está.

[iterable]
Um objeto iterável. A origem da sequência de valores na qual o loop opera.

[statement]
Uma instrução a ser executada em cada iteração. Pode fazer referência à variável. Você pode usar uma instrução de bloco para executar várias instruções.
*/


forOfStatement: {
  const numbers = [10, 20, 30];
  const letters = ["a", "b", "c"];
  const objects = [{ name: "a" }, { name: "b" }, { name: "c" }];

  for (const number of numbers) {
    console.log(number); //10 20 30 
  }

  for (const letter of letters) {
    console.log(letter); // a b c
  }

  for (const object of objects) {
    console.log(object); //{name: "a"},{name: "b"},{name: "c"}
  }
}

forOfStatementInObjectProperties: {
  const person = {
    name: "John",
    age: 32,
    height: 2.32,
  };
  //($_$w , person) is not iterable
  // for (const value of person) {
  //   console.log(value);
  // }
}
forOfStatement1: {
  const set = new Set();
  set.add(1);
  set.add("red");

  for (let n of set) {
    console.log(n); //1, red
  }
}
forOfStatement2: {
 const m = new Map();
 m.set(1, "black");
 m.set(2, "red");

 for (let n of m) {
   console.log(n); // [1, black], [2, red]
 }

}
