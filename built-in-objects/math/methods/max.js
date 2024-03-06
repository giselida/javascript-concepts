/*
[Math.max()]

O método estático Math.max() retorna o maior dos números fornecidos como parâmetros de entrada ou -Infinity se não houver parâmetros.

*/
const numbers = Array.from(Array(124934), (_, i) => i + 1);
{
  // Max + Apply
  const max = Math.max.apply(null, numbers);
  console.log(max); //Maximum call stack size exceeded
}

{
  // Max + Spread
  const max = Math.max(...numbers);
  console.log(max); //Maximum call stack size exceeded
}
{
  // Max + Reduce
  const max = numbers.reduce((a, b) => Math.max(a, b));
  console.log(max); //124934
}
