/*
O objeto Map contém pares de valores-chave e lembra a ordem de inserção original das chaves. Qualquer valor (objetos e valores primitivos) pode ser usado como chave ou valor.
*/

// Tipo de chaves suportadas

const obj = {};
obj[Symbol("key")] = "value";
obj[1] = "value";
obj[true] = "value";
obj[{}] = "using object as key";

console.log(obj); //{ 1: 'value',true: 'value','[object Object]': 'using object as key',[Symbol(key)]: 'value' }

let obj1 = { a: "a" };
let func = () => "hey";

//você também pode inicializar vários valores de uma vez usando sintaxe de array
let map = new Map([
  [123, true],
  [true, 123],
  [obj1, "object"],
  [func, "function"],
]);

console.log(map.get({ a: "a" })); // undefined
console.log(map.get(func)); // 'function'
console.log(map.get(obj1)); // 'object'
console.log(map.keys()); //{ [Iterator] }
