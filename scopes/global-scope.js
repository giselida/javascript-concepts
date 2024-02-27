/*
[Escopos]

Uma variável global é definida quando declaramos uma variável fora de qualquer função, assim ela torna acessível a qualquer parte da nossa aplicação ou site, podendo ser lida e alterada. Agora vejamos um simples exemplo de como podemos declarar uma variável global:

Variáveis definidas fora de uma função estão no escopo global. Além disso, há apenas um escopo global em um documento JavaScript. Depois de declarar uma variável global, você pode usá-la em qualquer lugar do seu código, até mesmo em funções.

*/

//Escopo global: o escopo padrão para todos os códigos executados no modo de script.

const greeting = "Hello World!";

function greet() {
  console.log(greeting); //Hello World!
}

greet();
