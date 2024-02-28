/*
[Strict inequality] (!==)

O operador de desigualdade estrita (!==) verifica se seus dois operandos não são iguais, retornando um resultado booleano. Ao contrário do operador de desigualdade, o operador de desigualdade estrita sempre considera operandos de tipos diferentes como diferentes.

*/
{
  const x = 10;
  const y = 10;
  console.log(x !== y); // false
 
}
{
const x = '10';
const y = 10;
console.log(x !== y); // true
}
{
  const x = "bruno";
  const y = "Bruno";
  console.log(x !== y); // true
}
{
  const x = "Bruno";
  const y = "Bruno";
  console.log(x !== y); // false
}