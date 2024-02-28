/*
[Variáveis]

Qual a diferença entre var, let e const no quesito Escopo?

var: não possui escopo de bloco
let: possui escopo de bloco.
const: possui escopo de bloco.

var tem escopo de função quando é declarado dentro de uma função. Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.

 */

// Apenas let e const possuem escopo de bloco
//Usando var, a variável não respeita o escopo de bloco e vaza para o escopo global, e com isso, pode ser acessada de qualquer lugar do código.

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
    var var_ = 2;
    const const_ = 10;
    let let_ = 3;
  }

  console.log(var_); // 2
  console.log(const_); // z is not defined
  // erro pois z só existe no escopo do if
  console.log(let_); // y is not defined
  // erro pois y só existe no escopo do if também o mesmo erro que const
