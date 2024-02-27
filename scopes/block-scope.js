/*
[Escopos]

 variáveis ( let, const) declaradas em um bloco {} só podem ter acesso dentro dele.
 
*/

//Escopo de bloco

{
  let greeting = "Hello World!";
  var lang = "English";
  console.log(greeting); //Hello World!
}

console.log(lang); //English
// ReferenceError
console.log(greeting); //greeting is not defined 
