/* 
[padEnd()]

O método padEnd() de valores String preenche esta string com uma determinada string (repetida, se necessário) para que a string resultante atinja um determinado comprimento. O preenchimento é aplicado a partir do final desta string.

String.Prototype.padEnd
  
preenche a string atual com uma determinada string (repetida, se necessário) 
para que a string resultante alcance um determinado comprimento. 

*/

const str1 = "Breaded Mushrooms";
const strPadded1 = str1.padEnd(25, ".");
console.log(strPadded1); //'Breaded Mushrooms........'

const str2 = "5";
const strPadded2 = str2.padEnd(3, "0");
console.log(strPadded2); //'500'

const str3 = "5";
const strPadded3 = str3.padEnd(3, "pad");
console.log(strPadded3); //'5pa'

// caso não seja passado nenhum argumento,
// o padrão é de uma string vazia
const str4 = "200";
const strPadded4 = str4.padEnd(5);
console.log(strPadded4); //'200  '
console.log(strPadded4.length); //5
