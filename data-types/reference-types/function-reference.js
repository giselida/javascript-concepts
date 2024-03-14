/*
[Function]
As funções são blocos de código reutilizáveis que podem ser chamados para executar tarefas específicas. São essenciais para a programação em JavaScript. 

De modo geral, uma função é um “subprograma” que pode ser chamado por código externo (ou interno, no caso de recursão) à função. Assim como o próprio programa, uma função é composta por uma sequência de instruções chamada corpo da função. Os valores podem ser passados para uma função como parâmetros e a função retornará um valor.

Em JavaScript, as funções são objetos de primeira classe, porque podem ser passadas para outras funções, retornadas de funções e atribuídas a variáveis e propriedades. Eles também podem ter propriedades e métodos como qualquer outro objeto. O que os distingue de outros objetos é que funções podem ser chamadas.

Passando argumentos

Parâmetros e argumentos têm significados ligeiramente diferentes, mas em documentos da web MDN, geralmente os usamos de forma intercambiável. Para uma referência rápida:

*/

function sum(a, b) {
  return a + b;
}
console.log(sum(80, 20)); //100
