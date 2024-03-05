/* 
[LASTINDEXOF]

O método lastIndexOf() de instâncias de Array retorna o último índice no qual um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente. A matriz é pesquisada de trás para frente, começando em fromIndex.

Array.lastIndexOf

retorna o último índice de um determinado
elemento em um array, ou -1 se não estiver presente.
*/

const beasts = ["ant", "bison", "camel", "duck", "bison"];

// retornando o último item encontrado
console.log(beasts.lastIndexOf("bison")); //4

// passando um índice inicial da busca
console.log(beasts.lastIndexOf("bison", 2)); //1

// quando um item não é encontrado
console.log(beasts.lastIndexOf("giraffe")); //-1
