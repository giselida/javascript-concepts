/*
[freeze()]

O método estático Object.freeze() congela um objeto. Congelar um objeto evita extensões e torna as propriedades existentes não graváveis e não configuráveis. Um objeto congelado não pode mais ser alterado: novas propriedades não podem ser adicionadas, propriedades existentes não podem ser removidas, sua enumerabilidade, configurabilidade, capacidade de escrita ou valor não podem ser alterados e o protótipo do objeto não pode ser reatribuído. freeze() retorna o mesmo objeto que foi passado.
*/

ObjectPrototypeFreeze: {
  const people = {
    name: "Roger",
    age: 42,
  };

  Object.freeze(people);

  people.age = 33; // Lança uma exceção caso esteja no strict mode
  console.log(people.age); //42

  delete people.name; // Lança uma exceção caso esteja no strict mode
  console.log(people.name); //"Roger"

  people["address"] = "Street 25"; // Lança uma exceção caso esteja no strict mode
  console.log(people.address); //undefined
}
ObjectPrototypeFreeze_Question: {
  const people = {
    name: "Roger",
    age: 42,
    address: {
      street: "Coolest Street",
      number: 27,
    },
  };

  Object.freeze(people);

  people.address.number = 50;
  console.log(people.address.number); //50
}
