/*
[Math.min()]

O método estático Math.min() retorna o menor dos números fornecidos como parâmetros de entrada, ou Infinity se não houver parâmetros.
*/
const numbers = Array.from(Array(124934), (_, i) => i + 1);
{
  // Max + Apply
  const max = Math.min.apply(null, numbers);
  console.log(max); //Maximum call stack size exceeded
}

{
  // Max + Spread
  const max = Math.min(...numbers);
  console.log(max); //Maximum call stack size exceeded
}
{
  // Max + Reduce
  const max = numbers.reduce((a, b) => Math.min(a, b));
  console.log(max); //1
}
