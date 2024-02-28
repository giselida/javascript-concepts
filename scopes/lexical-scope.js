/*
[Closures]
Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função. 

Em um grupo aninhado de funções, acessar as variáveis ​​que são declaradas fora da chamada de função é o escopo léxico, também conhecido como escopo estático.

Em palavras simples, o JavaScript procura variáveis de uma forma: se não conseguir encontrar uma variável em seu contexto de execução local, ele irá procurá-la em seu contexto de chamada. E se não for encontrado em seu contexto de chamada. Repetidamente, até olhar no contexto de execução global. E se não encontrar então, é undefined.
​
Escopo léxico ocorre quando temos um aninhamento de funções.

Significa dizer que funções aninhadas podem acessar variáveis dentro de outros blocos de funções ao qual façam parte.
*/
//Escopo léxico

function grandfather() {
  const name = "John";
  // 'likes' não é acessível aqui    
  console.log(likes);  //likes is not defined
  function parent() {
    // 'name' é acessível aqui
    // 'likes' não é acessível aqui
    console.log(name); //John
    console.log(likes); //likes is not defined
    function child() {
      //  Nível mais interno do aninhamento
      // 'name' também é acessível aqui
      const likes = "Coding";
      console.log(likes); //Coding
      console.log(name); //John
    }
    child();
  }
  parent();
}
grandfather()
