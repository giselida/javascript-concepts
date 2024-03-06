/*
[name]

A propriedade name data de uma instância Function indica o nome da função conforme especificado quando ela foi criada, ou pode ser anônimo ou '' (uma string vazia) para funções criadas anonimamente.

*/
const sum = (num1, num2) => num1 + num2;

const obj = {
  hello: () => console.log("Hello"),
};

console.log(sum.name); //'sum'
console.log(obj.hello.name); //'hello'
