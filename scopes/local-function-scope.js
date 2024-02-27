/*
[Escopos]

Uma variável se torna local quando ela é declarada dentro de uma função, de tal maneira a qual ela somente estará acessível dentro dessa função. Podemos ver um exemplo a seguir da declaração de uma variável local: 

As variáveis definidas dentro de uma função estão no escopo local. E têm um escopo diferente para cada chamada dessa função. Além disso, cada função, quando invocada, cria um novo escopo. Portanto, há um escopo de função também.

No escopo de função, as variáveis declaradas dentro da função, somente serão acessadas por dentro da função, não sendo possível acessa-las do lado de fora.

No escopo de função, esse comportamento acontece independente da palavra chave usada na criação da variável ou constante, var, let ou const.

*/
// Escopo de função ou escopo local

function greet() {
  var greeting = "Hello World!";
  // escopo da função ou escopo local
  console.log(greeting); // Hello Word
}

greet();
 // ReferenceError
console.log(greeting); // greeting is not defined 
