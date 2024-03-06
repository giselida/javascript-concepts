/*
O que é o debounce?

O termo debounce vem da eletrônica. Ao apertar um botão, por exemplo, no seu controle remoto da TV, o sinal viaja pelo microchip do controle tão rapidamente que, antes de você conseguir tirar o dedo do botão, ele replica (bounces, em inglês) e o microchip registra seu clique diversas vezes.

Debounce em JavaScript
Em JavaScript, o caso de uso é semelhante. Queremos acionar uma função, mas apenas uma vez a cada caso de uso.

Vamos dizer que nossa intenção é mostrar as sugestões de uma consulta de pesquisa, mas apenas após o visitante haver terminado de digitar.

Ou, então, digamos que nossa ideia é salvar as alterações em um formulário, mas somente quando o usuário não estiver trabalhando ativamente nas alterações, já que cada vez que salvamos os dados representa uma ida até o banco de dados.

*/

// Exemplo da técnica de debounce aplicada
// com uma função
exemple: {
  function debounce(callback, timeout) {
    let timer;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => callback(), timeout);
    };
  }
}
