/*
[Strict equality] (===)

O operador de igualdade estrita (===) verifica se seus dois operandos são iguais, retornando um resultado booleano. Ao contrário do operador de igualdade, o operador de igualdade estrita sempre considera operandos de tipos diferentes como diferentes.

*/
{
  const x = 10;
  const y = 10;
  console.log(x === y); // true
  //true
}
{
  const x = "10";
  const y = 10;
  console.log(x === y); // false
}
{
  const x = "bruno";
  const y = "Bruno";
  console.log(x === y); // false
}
{
  const x = "Bruno";
  const y = "Bruno";
  console.log(x === y); //true
}