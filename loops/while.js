/*
[while]

O loop while executa um bloco de código repetidamente enquanto uma condição específica for verdadeira. É geralmente usado quando o número de iterações não é conhecido previamente. A condição é verificada antes de cada iteração, e se for falsa, o loop é encerrado.

O loop "while" executa um bloco de código enquanto uma condição é verdadeira. A condição é verificada antes da execução do código. Veja um exemplo:

[Syntax]
while (condition)
  statement

[condition]
Uma expressão avaliada antes de cada passagem pelo loop. Se esta condição for avaliada como verdadeira, a instrução será executada. Quando a condição é avaliada como falsa, a execução continua com a instrução após o loop while.

[statement]
Uma instrução opcional que é executada enquanto a condição for avaliada como verdadeira. Para executar várias instruções dentro do loop, use uma instrução de bloco ({ ... }) para agrupar essas instruções.

Nota: Use a instrução break para interromper um loop antes que a condição seja avaliada como verdadeira.
*/

whileStatement:{
  let i = 1;
while (i <= 10) {
  console.log("Número: " + i); //'Número: 1' 'Número: 2' 'Número: 3'...
  i++;
}
}