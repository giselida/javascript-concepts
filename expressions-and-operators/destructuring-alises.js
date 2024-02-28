/*
[Destructuring]

A sintaxe de atribuição de desestruturação é uma expressão JavaScript que permite descompactar valores de arrays, ou propriedades de objetos, em variáveis distintas. 

*/

destructuringObject: {
  const objet = {
    left: 15,
    right: 10,
  };

  const { left, right: newRight } = objet;
  console.log(newRight); // 10
  console.log(left); // 15
}
destructuringlistOfNumbers: {
  const listOfNumbers = [1, 2, 3, 4, 5];
  const [firstNumber, secondNumber] = listOfNumbers;
  console.log(firstNumber); // 1
  console.log(secondNumber); // 2
}
destructuringPerson:{
  const person = {
    name: "Youssef",
    age: 22,
    address: {
      city: "Safi",
      country: "Morocco",
    },
  };
  const {
    name,
    address: { city },
  } = person;
  console.log(name, city); // 'Youssef Safi'
}