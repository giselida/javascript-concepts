/*
[Variáveis]

Qual a diferença entre var, let e const no quesito Escopo?

var: não possui escopo de bloco
let: possui escopo de bloco.
const: possui escopo de bloco.

var tem escopo de função quando é declarado dentro de uma função. Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.

 */

// Apenas let e const possuem escopo de bloco


var greeter = "Hi";

function newFunction() {
  var hello = "Hello";
  console.log(hello); //Hello
}
newFunction();
console.log(greeter); //Hi
console.log(hello); //hello is not defined


const age = 20;

  if (age > 10) {
    var x = 2;
    const z = 10;
    let y = 3;
  }

  console.log(x); // 2
  console.log(z); // z is not defined
  // erro pois z só existe no escopo do if
  console.log(y); // y is not defined
  // erro pois y só existe no escopo do if também o mesmo erro que const
