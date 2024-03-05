/*
[SPLICE]

No “splice()” podemos escolher um índice inicial e final para substituirmos valores entre eles

Array.Prototype.splice

altera o conteúdo de uma array, 
removendo ou substituindo elementos existentes
e / ou adicionando novos elementos 

*/

const listMonths = ["Jan", "March", "April", "June"];
listMonths.splice(1, 0, "Feb", 2, 3);
console.log(listMonths); //[ 'Jan', 'Feb', 2, 3, 'March', 'April', 'June' ]

listMonths.splice(4, 1, "May");
console.log(listMonths); //[ 'Jan', 'Feb', 2, 3, 'May', 'April', 'June' ]

// removendo 0 elementos
// passando um índice inicial fora dos limites do array
const months = ["Jan", "March", "April"];
const days = ["Monday", "Tuesday", "Wednesday"];

const removedMonths = months.splice(1, 0);
const removedDays = days.splice(3, 2);

console.log(removedMonths); //[]
console.log(removedDays); //[]

// Removendo todos os elementos subsequentes a partir de um índice

const months2 = ["Jan", "March", "April"];

const removedMonths2 = months2.splice(1);

console.log(months2); //[ 'Jan' ]
console.log(removedMonths2); //[ 'March', 'April' ]

//Utilizando índice negativo

const months3 = ["January", "February", "March", "April"];
const removedMonths3 = months3.splice(-1);

console.log(months3); //[ 'January', 'February', 'March' ]
console.log(removedMonths3); //[ 'April' ]

const months4 = ["January", "February", "March"];
const removedMonths4 = months4.splice(4, 2);
console.log(removedMonths4); //[]

const array2 = ["branco", 10, 20, 30, "novo elemento"];
array2.splice(1, 2, "splice", "bola");
console.log(array2); //[ 'branco', 'splice', 'bola', 30, 'novo elemento' ]
