/*
[for]

O loop “for” é amplamente utilizado e permite executar um bloco de código um número específico de vezes. Ele é composto por três componentes: a inicialização, a condição de execução e a expressão final. Aqui está um exemplo de como usar o loop “for”: 

A instrução for cria um loop que consiste em três expressões opcionais, colocadas entre parênteses e separadas por ponto e vírgula, seguidas por uma instrução (geralmente uma instrução em bloco) a ser executada no loop.

Todas as três expressões no início do loop for são opcionais. Por exemplo, não é necessário usar o bloco de inicialização para inicializar variáveis:

let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}

[Syntax]
for (initialization; condition; afterthought)
  statement

[initialization] Optional
Uma expressão (incluindo expressões de atribuição) ou declaração de variável avaliada uma vez antes do início do loop. Normalmente usado para inicializar uma variável de contador. Esta expressão pode opcionalmente declarar novas variáveis com palavras-chave var ou let. Variáveis declaradas com var não são locais para o loop, ou seja, estão no mesmo escopo em que o loop for. Variáveis declaradas com let são locais para a instrução.

O resultado desta expressão é descartado.

[condition] Optional
Uma expressão a ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada como verdadeira, a instrução será executada. Se a expressão for avaliada como falsa, a execução sai do loop e vai para a primeira instrução após a construção for.

Este teste condicional é opcional. Se omitida, a condição sempre será avaliada como verdadeira.

[afterthought] Optional
Uma expressão a ser avaliada no final de cada iteração do loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.

[statement]
Uma instrução que é executada enquanto a condição for avaliada como verdadeira. Você pode usar uma instrução de bloco para executar várias instruções. Para não executar nenhuma instrução dentro do loop, use uma instrução vazia (;).

*/

forStatement:{   
    let index = 1; 
    for (; index <= 10; index++) {
    console.log("Número: " + index); //'Número: 1' 'Número: 2'....
    }
}

forStatement2:{
  let str = "";

  for (let index = 0; index < 9; index++) {
    str = str + index;
  }

  console.log(str); //"012345678"
}

forStatement3:{
for (let index = 1; index < 10; index += 2) {
  if (index === 7) {
    break;
  }
  console.log("Total elephants: " + index); //'Total elephants: 1' 'Total elephants: 3' 'Total elephants: 5'
}
}