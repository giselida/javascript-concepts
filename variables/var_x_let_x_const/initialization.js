/* 
[Variáveis]

Qual a diferença entre var, let e const em termos de inicialização?
var: permite ser declarado sem ser inicializado
let: permite ser declarado sem ser inicializado
const: não permite ser declarado sem ser inicializado
*/

// apenas var e let podem ser declaradas sem inicializar

var user;// Não acusa error pois pode ser declarado sem ser inicializado
console.log(user);

let age;// Não acusa error pois pode ser declarado sem ser inicializado
console.log(age);

const height; // Syntax Error pois toda const deve ser inicializada, const declarations must be initialized

