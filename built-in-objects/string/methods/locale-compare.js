/*
[localeCompare()]

O método localeCompare() de valores String retorna um número que indica se esta string vem antes, ou depois, ou é igual à string fornecida na ordem de classificação. Em implementações com suporte à API Intl.Collator, esse método simplesmente chama Intl.Collator.

Ao comparar um grande número de strings, como na classificação de grandes arrays, é melhor criar um objeto Intl.Collator e usar a função fornecida por seu método compare().

*/

const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b)); //1
console.log(a.localeCompare(b, "en", { sensitivity: "base" })); //0
