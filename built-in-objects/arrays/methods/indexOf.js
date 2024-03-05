/* 
[INDEXOF]

O método indexOf() de instâncias de Array retorna o primeiro índice no qual um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente.

Array.indexOf

retorna o primeiro índice no qual um determinado
elemento pode ser encontrado na matriz, 
ou -1 se não estiver presente.

*/

const beasts = ["ant", "bison", "camel", "duck", "bison"];

// retornando o primeiro item encontrado
console.log(beasts.indexOf("bison")); //1

// passando um índice inicial da busca
console.log(beasts.indexOf("bison", 2)); //4

// quando um item não é encontrado
console.log(beasts.indexOf("giraffe")); //-1

//Encontrando todas as ocorrências de um elemento

const foundIndexes = [];
const letters = ["a", "b", "a", "c", "a", "d"];
const elementToFind = "a";
let foundIndex = letters.indexOf(elementToFind);
while (foundIndex != -1) {
  foundIndexes.push(foundIndex);
  foundIndex = letters.indexOf(elementToFind, foundIndex + 1);
}
console.log(foundIndexes); //[ 0, 2, 4 ]

// Evitando que valores duplicados sejam adicionados em um array

function updateVegetablesCollection(veggies, newVeggie) {
  const veggieIndex = veggies.indexOf(newVeggie);
  const isNewVeggie = veggieIndex === -1;
  const alreadyExists = veggieIndex > -1;
  if (isNewVeggie) {
    veggies.push(newVeggie);
    console.log(`New veggie added ${newVeggie}`);
    return;
  } else if (alreadyExists) {
    console.log(`${newVeggie} already exists in the veggies collection.`); //'spinach already exists in the veggies collection.'
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

// inserindo um valor novo
updateVegetablesCollection(veggies, "spinach");
console.log(veggies); //[ 'potato', 'tomato', 'chillies', 'green-pepper', 'spinach' ]

// tentando inserir um valor duplicado
updateVegetablesCollection(veggies, "spinach");
console.log(veggies); //[ 'potato', 'tomato', 'chillies', 'green-pepper', 'spinach' ]
