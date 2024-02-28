/*
[do while]
A instrução do...while cria um loop que executa uma instrução especificada até que a condição de teste seja avaliada como falsa. A condição é avaliada após a execução da instrução, resultando na execução da instrução especificada pelo menos uma vez. 

[Syntax]
do
  statement
while (condition);

[statement]
Uma instrução que é executada pelo menos uma vez e reexecutada sempre que a condição é avaliada como verdadeira. Para executar várias instruções dentro do loop, use uma instrução de bloco ({ ... }) para agrupar essas instruções.

[condition]
Uma expressão avaliada após cada passagem pelo loop. Se a condição for avaliada como verdadeira, a instrução será executada novamente. Quando a condição é avaliada como falsa, o controle passa para a instrução após do...while.

Nota: Use a instrução break para interromper um loop antes que a condição seja avaliada como false.
*/

doWhileStatement: {
  let result = "";
  let i = 0;
  do {
    i += 1;
    result += `${i} `;
  } while (i > 0 && i < 5);

  console.log(result); // 1 2 3 4 5
}