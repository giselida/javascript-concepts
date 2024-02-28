/*
[Spread]

A sintaxe spread (...) permite que um iterável, como um array ou string, seja expandido em locais onde são esperados zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array). Em um objeto literal, a sintaxe de propagação enumera as propriedades de um objeto e adiciona os pares chave-valor ao objeto que está sendo criado.
 */
spreadSyntax:{
  const evenNumbers = [0, 2, 4, 6];
  const oddNumbers = [1, 3, 5, 7];
  const allNumbers = [...evenNumbers, ...oddNumbers];
  console.log(allNumbers);

  let person = { name: "John", age: 18 };
  person = { ...person, height: 1.75 };
  console.log(person);

  console.log([..."ABCDE"]);
}
