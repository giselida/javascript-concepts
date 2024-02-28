/*
[Greater than] (>)

O operador maior que (>) retorna verdadeiro se o operando esquerdo for maior que o operando direito e falso caso contrário.
*/

{
  const x = "ab";
  const y = "aa";
  console.log(x > y); // true
}
{
  const x = 5;
  const y = 3;
  console.log(x > y); // true
}
{
  const x = 3;
  const y = 3;
  console.log(x > y); // false
}
{
  const x = 3n;
  const y = 5;
  console.log(x > y); // false
}
