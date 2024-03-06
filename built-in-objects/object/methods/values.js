/*
[values()]

O método estático Object.values() retorna uma matriz dos valores de propriedade enumeráveis com chave de string do próprio objeto.
*/

const object1 = {
  a: "something",
  b: 42,
  c: false,
};

console.log(Object.values(object1)); //["something", 42, false];

const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object com ordenação aleatória de chaves
// Ao usar teclas numéricas, os valores são retornados na ordem numérica das chaves
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

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
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']
