/*
[toExponential()]

O método toExponential() de valores numéricos retorna uma string que representa este número em notação exponencial.

Number.prototype.toExponential
          
retorna uma string com a representação 
da notação exponencial de um number.  
*/

const age = 25;
const weight = 80.87;

console.log(age.toExponential()); //'2.5e+1'
console.log(age.toExponential(4)); //'2.5000e+1'
console.log(age.toExponential(2)); //'2.50e+1'

console.log(weight.toExponential()); //'8.087e+1'
console.log(weight.toExponential()); //'8.087e+1'
