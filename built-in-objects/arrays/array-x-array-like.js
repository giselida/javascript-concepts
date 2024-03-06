// Comparações entre um Array e um Array-Like Object

// Array Like o que é
// é um objeto que possui a propriedade length e propriedades indexadas

/*
O que é um o Array-like object?

Um Array-Like Object se satisfizer os critérios listados abaixo:
a) O índice deve começar em 0
b) O índice deve ser incrementado da mesma forma que um array
c) Deve ter uma propriedade length e retornar um número inteiro não negativo
d) Seu valor deve ser igual ao número de chaves de índice inteiro

Como os Array-like object são diferentes de um array?

Falando sobre a diferença entre array e objetos semelhantes a array:
a) O intervalo do índice de um objeto semelhante a uma matriz é 0≤I≤2^53–1, enquanto o intervalo do índice de uma matriz é 0≤ I <2^32–1
b) Um objeto semelhante a um array não é derivado do objeto Array.prototype; portanto, não podemos realizar operações de deslocamento e remodelação como push, pop, forEach e muito mais

Exemplos de Array-like object são:
a) Objeto de argumentos em uma função tradicional
b) Coleção HTML retornada de document.querySelectorAll ou document.getElementsByTagName

Para entender a diferença, vamos dar uma olhada no exemplo abaixo:
*/
function printArgumentList() {
  console.log("Arguments: ", arguments); //'Arguments:  { [Iterator]  0: \'one\', 1: 2, 2: 3 }'
  console.log("First argument: ", arguments[0]); //'First argument:  one'
  console.log("Length of arguments: ", arguments.length); //Length of arguments:  3'
}
printArgumentList("one", 2, 3);

const arrayLike = { 0: "foo", 1: "bar", length: 2 };
console.log(Array.from(arrayLike)); //["foo", "bar"];
console.log(Array.prototype.slice.call(arrayLike)); //["foo", "bar"];

// Semelhanças
{
  // Possuem o mesmo getter para a propriedade length
  const letters = ["d", "e", "f"];
  function lengthExample() {
    console.log(arguments.length); //3
    console.log(letters.length); //3
  }
  lengthExample("a", "b", "c");
}
{
  // Possuem o mesmo getter para a índices
  const letters = ["d", "e", "f"];
  function indexAccessExample() {
    console.log(arguments[0]); //"a"
    console.log(letters[0]); //"d"
  }
  indexAccessExample("a", "b", "c");
}

{
  // Ambos são objetos
  const letters = ["d", "e", "f"];
  function typeOfExample() {
    console.log(typeof letters); //'object'
    console.log(typeof arguments); //'object'
  }
  typeOfExample("a", "b", "c");
}

// Diferenças

{
  // Array-Like não é um array
  const letters = ["d", "e", "f"];
  function isArrayExample() {
    console.log(Array.isArray(letters)); //true
    console.log(Array.isArray(arguments)); //false
  }
  isArrayExample("a", "b", "c");
}

{
  // alterar o valor da propriedade length
  // de um array like não tem qualquer efeito sobre seus itens
  const letters = ["d", "e", "f"];
  function changeLengthExample() {
    letters.length = 0;
    arguments.length = 0;
    console.log(letters.length); //0
    console.log(arguments.length); //0
    console.log(letters[1]); //undefined
    console.log(arguments[1]); //"b"
  }
  changeLengthExample("a", "b", "c");
}

{
  // Adicionar ou remover itens em um array-like
  //não altera o valor da propriedade length

  const letters = ["d", "e", "f"];
  function addItensExample() {
    letters[3] = "g";
    arguments[4] = "e";
    console.log(letters.length); //4
    console.log(arguments.length); //3
  }
  addItensExample("a", "b", "c");
}

{
  // Um array-Like não tem acesso aos métodos de instância de array

  const letters = ["d", "e", "f"];
  function foo() {
    console.log(letters.join("")); //"def"
    console.log(arguments.push()); //arguments.push is not a function
  }
  foo("a", "b", "c");
}
