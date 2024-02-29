/*
[Logical NOT] (!)

O operador lógico NOT (!) (complemento lógico, negação) leva a verdade à falsidade e vice-versa. Normalmente é usado com valores booleanos (lógicos). Quando usado com valores não booleanos, retorna falso se seu único operando puder ser convertido em verdadeiro; caso contrário, retorna verdadeiro.
*/

console.log(!true); // false
console.log(!false); // true
console.log(!""); // true
console.log(!"Cat"); // false

//[Double NOT] (!!)
console.log(!!true); // true
console.log(!!{}); // true
console.log(!!new Boolean(false)); // true
console.log(!!false); // false
console.log(!!""); // false
console.log(!!Boolean(false)); // false
