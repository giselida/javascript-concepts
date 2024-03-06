/*
[keys()]

O método estático Object.keys() retorna uma matriz de nomes de propriedades enumeráveis com chave de string do próprio objeto.
*/

const object1 = {
  a: "something",
  b: 42,
  c: false,
};

console.log(Object.keys(object1)); //["a", "b", "c"]

// Array simple
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object com ordenação aleatória de chaves
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo é uma propriedade não enumerável
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  }
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
