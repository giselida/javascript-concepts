/*
O Switch Case é uma instrução que se comporta de forma semelhante ao if / else, porém possui uma estrutura mais organizada e de fácil compreensão.

as instruções switch são suas amigas - elas pegam uma única expressão/valor como entrada e, em seguida, examinam várias opções até encontrar uma que corresponda a esse valor, executando o código correspondente que a acompanha. Aqui estão mais alguns pseudocódigos, para você ter uma ideia:

[syntax]

switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
*/

let signo = "Leão";

switch (signo) {
  case "Áries":
    console.log("De 21 março a 20 abril");
    break;
  case "Touro":
    console.log("de 21 abril a 20 maio");
    break;
  case "Gêmeos":
    console.log("de 21 maio a 20 junho");
    break;
  case "Câncer":
    console.log("de 21 junho a 22 julho");
    break;
  case "Leão":
    console.log("de 23 julho a 22 agosto");
    break;
  case "Virgem":
    console.log("de 23 agosto a 22 setembro");
    break;
  default:
    console.log("Signo não registrado");
    break;
}
