/*
[raw()]

O método estático String.raw() é uma função de tag de literais de modelo. Isso é semelhante ao prefixo r em Python ou ao prefixo @ em C# para literais de string. É usado para obter a forma de string bruta de literais de modelo - ou seja, substituições (por exemplo, ${foo}) são processadas, mas sequências de escape (por exemplo, \n) não são.

String.raw()

*/

const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`The file was uploaded from: ${filePath}`); //'The file was uploaded from: C:\Development\profile\aboutme.html'
