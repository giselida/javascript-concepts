/* Qual a diferença entre var, let e const no quesito a re-declaração?
var: permite re-declarar
let: não permite re-declarar
const: não permite re-declarar
 */
var name = "John";//não acusa error pois permite redeclaração
var name = "Doe";

console.log(user); // ok pois var pode ser re-declarada

// não é possível re-declarar variáveis usando let e const
/* Vai acusar o mesmo error em ambas variáveis do tipo [const, let] pois [const, let] não
pode ser redeclarado no mesmo [ ESCOPO ] */

const z = 1;
const z = 3; // erro pois não é possível re-declarar usando const,  Cannot redeclare block-scoped variable 'z'.
console.log(z);

let y = 1;
let y = 3; // erro pois não é possível re-declarar usando let, Cannot redeclare block-scoped variable 'y'.
console.log(y);
