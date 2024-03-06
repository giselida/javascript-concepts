/* 
[padStart()]

O método padStart() de valores String preenche esta string com outra string (várias vezes, se necessário) até que a string resultante atinja o comprimento determinado. O preenchimento é aplicado desde o início desta string.
preenche a string atual com uma determinada string (repetida, se necessário) 
para que a string resultante alcance um determinado comprimento.

String.Prototype.padEnd

*/

const str1 = "Breaded Mushrooms";
const strPadded1 = str1.padStart(25, ".");
console.log(strPadded1); //'........Breaded Mushrooms'

const str2 = "5";
const strPadded2 = str2.padStart(3, "0");
console.log(strPadded2); //'005'

const str3 = "5";
const strPadded3 = str3.padStart(3, "pad");
console.log(strPadded3); //'pa5'

// caso não seja passado nenhum argumento,
// o padrão é de uma string vazia
const str4 = "200";
const strPadded4 = str4.padStart(5);
console.log(strPadded4); //'200'
console.log(strPadded4.length); //5
