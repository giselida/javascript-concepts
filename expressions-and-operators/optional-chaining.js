/*
[Optional chaining]
         
O operador de encadeamento opcional [ Optional chaining ] (?.) acessa a propriedade de um objeto ou chama uma função. Se o objeto acessado ou a função chamada usando esse operador for undefined ou null, a expressão sofrerá um curto-circuito e será avaliada como indefinida em vez de gerar um erro.
*/

OptionalChaining:{
  const adventurer = {
    name: "Alice",
    cat: {
      name: "Dinah",
    },
  };
const key ="dog"
  const dogName = adventurer?.[key]?.name;
  console.log(dogName); // undefined

  const otherAnimal = adventurer.duck.name;
  console.log(otherAnimal); // Cannot read properties of undefined (reading 'name')
}
