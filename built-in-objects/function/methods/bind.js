/*
[bind()]

O método bind() de instâncias de Function cria uma nova função que, quando chamada, chama essa função com sua palavra-chave this definida com o valor fornecido e uma determinada sequência de argumentos precedendo qualquer fornecido quando a nova função é chamada.

*/

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); //undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); //42
