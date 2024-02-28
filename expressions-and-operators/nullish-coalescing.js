/*
[Nullish]

O operador coalescente nulo (??) é um operador lógico que retorna seu operando do lado direito quando seu operando do lado esquerdo é nulo ou indefinido e, caso contrário, retorna seu operando do lado esquerdo.

[Syntax]
leftExpr ?? rightExpr

*/
  const foo = null ?? "default string";
  console.log(foo); // default string

  const baz = undefined ?? 42;
  console.log(baz); // 42

  const nullValue = null;
  const emptyText = "";
  const someNumber = 42;

  const valueA = nullValue ?? "default for A";
  const valueB = emptyText ?? "default for B";
  const valueC = someNumber ?? 0;

  console.log(valueA); //'default for A'
  console.log(valueB); // ''
  console.log(valueC); // 42

