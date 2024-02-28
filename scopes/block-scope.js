/*
[Escopos]
As variáveis declaradas no escopo do bloco ficam confinadas a esse bloco, oferecendo um alto grau de isolamento.

Escopo de bloco não está relacionado necessariamente a funções, estamos nos referindo por exemplo: condicional if, loop for,loop while.

No escopo de bloco precisamos ficar atentos ao uso das palavras chaves para criação de variáveis, pois se utilizarmos as palavras chaves [let] e [const], o escopo do bloco será respeitado, mas se utilizarmos a palavra chave [var], o escopo não será respeitado e a variável poderá ser acessada de qualquer lugar do código, passando com isso a ter o escopo global, de forma automatica.

O escopo do bloco em JavaScript é como uma série de caixas aninhadas dentro de um contêiner maior, cada uma com seu próprio conjunto de variáveis.

Variáveis dentro de um escopo de bloco não podem escapar para os escopos externos, assim como um boneco dentro de um boneco não pode sair.

 // Apenas let e const possuem escopo de bloco
 
*/

//Escopo de bloco

escopeOfBlock:{
  let greeting = "Hello World!";
  var lang = "English";
  //Usando let, a variável só pode ser acessada dentro do bloco:
  console.log(greeting); //Hello World!
}

console.log(lang); //English
// ReferenceError
console.log(greeting); //greeting is not defined 
