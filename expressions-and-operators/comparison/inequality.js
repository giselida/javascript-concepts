/*
[Inequality ] (!=)

O operador de desigualdade (!=) verifica se seus dois operandos não são iguais, retornando um resultado booleano. Ao contrário do operador de desigualdade estrita, ele tenta converter e comparar operandos de tipos diferentes.

*/
{
  const x = 15;
  const y = 10;
  console.log(x != y); // true
} 
{
  const x = 10;
  const y = 10;
  console.log(x != y); // false
} 
{
  const x = "15";
  const y = 15;
  console.log(x != y); // false
} 
{
  const x = "joão";
  const y = "João";
  console.log(x != y); // true
} 
