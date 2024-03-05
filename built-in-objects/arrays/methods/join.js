/* 
[JOIN]

O “join()” puxa elementos de um array e lista no formato de string
 
Array.Prototype.join

cria e retorna uma nova string 
concatenando todos os elementos em um array
*/

const elements = ["Wind", "Water", "Fire"];

// caso o separador não seja passado
// os elementos serão concatenados com virgula
console.log(elements.join()); //'Wind,Water,Fire'

// concatenando os elementos com uma virgula e espaço
console.log(elements.join(", ")); //'Wind, Water, Fire'

// concatenando os elementos com o sinal
// de + com espaço antes e depois
console.log(elements.join(" + ")); //'Wind + Water + Fire'

// concatenando os elementos sem separados
console.log(elements.join("")); //'WindWaterFire'

// concatenando os elementos com separados
const array = ["Gisélida", "João", 1, 2, 3, 4, 5, 6];
const join = array.join(" ");
console.log(join); //'Gisélida João 1 2 3 4 5 6'

// caso o array não tenha elementos um string vazia é retornada
console.log([].join("")); //''
console.log([].join("") === ""); //true ​​​​

// falsy values são considerados como string vazia

const falsyValues = [null, "", false, undefined, NaN, 0];
const result = falsyValues.join(" ").split(" ");
console.log(result); //[ '', '', 'false', '', 'NaN', '0' ]
