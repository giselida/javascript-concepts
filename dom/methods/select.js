/*
[select]

Esse evento serve para quando você quiser disparar algo quando o elemento for selecionado. Nesse caso apenas disparamos um simples alert.

? select()
seleciona todo o texto em um elemento <textarea>
ou em um elemento <input> que inclui um campo de texto.

*/

  const $element = document.querySelector("input");
  $element.select();
