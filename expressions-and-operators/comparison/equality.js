/*
[Equality] (==)

O operador de igualdade (==) verifica se seus dois operandos são iguais, retornando um resultado booleano. Ao contrário do operador de igualdade estrita, ele tenta converter e comparar operandos de tipos diferentes.

*/
{
  const x = "10";
  const y = 10;
  console.log(x == y); //true
}
{
  const x = 10;
  const y = 10;
  console.log(x == y); //true
}
{
  const x = 8;
  const y = 10;
  console.log(x == y); //false
}
{
  const x = 'anna';
  const y = 'Anna';
  console.log(x == y); //false
}
