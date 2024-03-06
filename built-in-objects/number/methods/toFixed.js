/*
O método toFixed() de valores numéricos formata esse número usando notação de ponto fixo.

Number.prototype.toFixed
          
retorna uma string de um number com 
um numero especifico de casas decimais.
*/

const age = 25;
const weight = 80.878965;

let formattedAge = age.toFixed();

console.log(formattedAge); //'25'

formattedAge = age.toFixed(4);
console.log(formattedAge); //'25.0000'

console.log(typeof formattedAge); //'string'

let formattedWeight = weight.toFixed();
console.log(formattedWeight); //'81'

formattedWeight = weight.toFixed(4);
console.log(formattedWeight); //'80.8790'
