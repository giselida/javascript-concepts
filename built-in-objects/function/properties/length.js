/*
[length]

A propriedade length data de uma instância Function indica o número de parâmetros esperados pela função.

*/
const sum = (num1, num2) => num1 + num2;

const obj = {
  hello: () => console.log("Hello"),
};

console.log(sum.length); //2
console.log(obj.hello.length); //0
