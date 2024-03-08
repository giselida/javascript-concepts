/*
[if e if…else]

As sentenças if e if…else são estruturas de controle de fluxo usadas em JavaScript. O fluxo de código condicional permite escolher a instrução seguinte, dependendo da resposta ou resultado. Graças às estruturas if e if…else, o programa toma uma decisão de como executar o código quando é cumprida ou não uma condição necessária.

[syntax]
if (condition) {
   código a ser executado se a condição for verdadeira
} else {
   execute algum outro código
}

If avalia a condição dentro dos parênteses () como uma expressão booleana: verdadeira ou falsa. Estas expressões são obtidas usando os operadores de comparação ==, ===, >, <, >=, <=, !==, !=. Se a condição for verdadeira (true), o código será executado dentro das chaves {}. Se a condição for falsa (false), o bloco de código será ignorado.

*/
const idade = 16;

if ((idade > 15 && idade < 18) || idade > 70) {
  console.log("O voto é opcional"); //'O voto é opcional'
} else if (idade < 16) {
  console.log("Você não pode votar");
} else {
  console.log("Você é obrigado a votar");
}
