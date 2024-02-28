/*
[Greater than or equal] (>=)

O operador maior ou igual (>=) retorna verdadeiro se o operando esquerdo for maior ou igual ao operando direito e falso caso contrário.
*/

{
  const x = "ab";
  const y = "aa";
  console.log(x >= y); // true
}
{
  const x = 5;
  const y = 3;
  console.log(x >= y); //  true
}
{
  const x = 3;
  const y = 3;
  console.log(x >= y); // true
}
{
  const x = 3n;
  const y = 5;
  console.log(x >= y); // false
}