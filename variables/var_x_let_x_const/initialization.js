/* 
[Variáveis]

​​São espaços na memória que armazenam valores. Você começa declarando uma variável com a palavra-chave [ let ], [ var ] ou [ const ] seguida do nome que você dá à variável.

Um identificador JavaScript geralmente começa com uma letra, sublinhado (_) ou cifrão ($). Os caracteres subsequentes também podem ser dígitos (0 – 9). Como o JavaScript diferencia maiúsculas de minúsculas, as letras incluem os caracteres de A a Z (maiúsculas) e de A a z (minúsculas).

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

