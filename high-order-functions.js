// Uma função de alta ordem é uma função que retorna outra função, ou uma função que
// pega outra função como argumento.

//Retornando uma função de uma função
function add(a, b) {
  return () => a + b;
}

add(2, 3)();

// recebe uma função como argumento

function multiply(a, b, doneFn) {
  const multiply = a * b;
  doneFn(multiply);
}

multiply(2, 3, (result) => console.log(result));
