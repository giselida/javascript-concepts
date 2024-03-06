/*
[entries()]

O método estático Object.entries() retorna uma matriz dos pares enumeráveis de valores-chave de propriedade com chave de string enumeráveis de um determinado objeto.
*/

const object1 = {
  a: "something",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`); //'a: something', 'b: 42'
}
