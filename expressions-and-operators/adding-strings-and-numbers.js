/*
[Concatenação]

Em javascript, podemos adicionar um número e um número, mas se tentarmos adicionar um número e uma string, como a adição não é possível, ocorre a 'concatenação'. 

*/
concatenation:{
  const x = 5,
    y = "5";
  const z = x + y;
  console.log(z); // '55'
}
concatenation1:{
  const x = 5 + 5;
  const y = "5" + 5;
  const z = "Hello" + 5;
  console.log(x, `Type: ${typeof x}`); //10 'Type: number'
  console.log(y, `Type: ${typeof y}`); //'55 Type: string'
  console.log(z, `Type: ${typeof z}`); //'Hello5 Type: string'
}
