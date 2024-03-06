/*
[Definição de uma Function Declaration]

As declarações de função são a forma mais comum de definir uma função em JavaScript. Eles começam com a palavra-chave function, seguida pelo nome da função, uma lista de parâmetros entre parênteses e um bloco de código entre chaves:

As declarações de funções são içadas, o que significa que podem ser chamadas antes de serem definidas no código:
*/

function welcome(name) {
  return `Welcome ${name}, I am a Function Declaration`;
}
console.log(welcome("João")); //'Welcome João, I am a Function Declaration'

//

console.log(greet("John")); //'Hello, John! I am a Function Declaration'

function greet(name) {
  return "Hello, " + name + "! " + "I am a Function Declaration";
}

/*
[Definição de uma Function Expression]

Uma expressão de função é uma forma de definir uma função dentro de uma expressão. Ele usa a palavra-chave function, seguida por um nome de função opcional, parâmetros entre parênteses e um bloco de código entre chaves:

As expressões de função não são içadas, o que significa que devem ser definidas antes de serem chamadas:

*/

const bad = function hello(name) {
  return `Welcome ${name}, I am a Function Expression`;
};

//

const hello = function (name) {
  return "Hello, " + name + "! " + "I am a Function Expression";
};

/*
[Definição de uma Anonymous Function Expression]

Funções anônimas são funções sem nome. Eles são normalmente usados em expressões de funções e como argumentos em outras funções:
funções anônimas são frequentemente usadas em manipuladores de eventos, como este:

*/

const good = function (name) {
  return `Welcome ${name}, I'm a Anonymous Function Expression`;
};

/*
[Definição de uma Arrow Function]

As funções de seta são uma forma concisa de escrever expressões de função. Eles usam a sintaxe => e têm uma sintaxe mais curta que a função normal

*/

const awesome = (name) => {
  return `Welcome ${name}, I am a Arrow Function`;
};
const hello2 = (name) => "Hello, " + name + "! " + "I am a Arrow Function";

// Definição de uma função utilizando o construtor do objeto Function

const numberA = "numberA",
  numberB = "numberB";
const sumFunction = new Function(numberA, numberB, "return numberA + numberB");
const sum = sumFunction(10, 15);
console.log(sum);

/*
    
    Aqui a sumFunction é criada com a invocação do construtor Function 
    que tem os parâmetros numberA e numberB e o corpo retorna numberA + numberB.

    As funções criadas desta forma não têm acesso ao escopo atual, portanto,
    closures não podem ser criadas. 
    Elas são sempre criadas no escopo global.

    /*
    Lembre-se de que não é recomendado declarar funções usando new Function(). 
    Pois como o corpo da função é avaliado em tempo de execução, essa abordagem 
    herda muitos problemas de uso de eval(), riscos de segurança,
    depuração mais difícil, nenhuma maneira de aplicar otimizações de engine,
    nenhum preenchimento automático do editor.
    */

/*
[Definição de uma Immediately Invoked Function Expression - IIFE]

Uma expressão de função imediatamente invocada (IIFE) é uma expressão de função definida e executada imediatamente após sua criação. É colocado entre parênteses para torná-lo uma expressão e seguido por um conjunto adicional de parênteses para invocá-lo:

IIFEs são frequentemente usados para criar um novo escopo para evitar poluir o namespace global:
*/

// Aqui tmb é possível defini-la com ou sem nome

(function (name) {
  return `Welcome ${name}, I'm a IIFE Function`;
})("John");

(function hello2(name) {
  return `Welcome ${name}, I'm a IIFE Function with Name`;
})("John");

// Definição de uma Function Declaration
console.log(welcome("John")); //'Welcome João, I am a Function Declaration';
console.log(greet("John")); //'Hello, John! I am a Function Declaration';

//Definição de uma Function Expression
console.log(bad("John")); //'Welcome John, I am a Function Expression'
console.log(hello("John")); //'Hello, John!I m a Function Expression'

//Definição de uma Anonymous Function Expression
console.log(good("John")); //'Welcome John, I am a Anonymous Function Expression'

// Definição de uma Arrow Function
console.log(awesome("John")); //'Welcome John, I\'m a Arrow Function'
console.log(hello2("John")); //"Hello, John! I am a Arrow Function"
