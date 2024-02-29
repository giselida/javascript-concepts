/* 
[addEventListener()]

registra um manipulador de eventos
para um tipo de evento específico de um elemento.

[Events]

Os elementos DOM além de possuírem métodos também possuem eventos. São eles que fazem a interatividades dos elementos no documento, mas não se engane: eventos também são métodos.

[click]

Um dos mais usados é o click, quando o usuário clicar no elemento, ele realizará alguma ação.

*/

  const $button = document.getElementById("myBtn");
  $button.addEventListener("click", hello);

  function hello() {
    alert("Hello World!");
  }

