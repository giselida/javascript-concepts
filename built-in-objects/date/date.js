/*
Os objetos JavaScript Date representam um único momento em um formato independente de plataforma. Os objetos de data encapsulam um número inteiro que representa milissegundos desde a meia-noite do início de 1º de janeiro de 1970, UTC (a época).
*/

const actualDate = new Date();
//retorna a data e horário atual pelo fuso horário zero
console.log(actualDate);

const specificDate = new Date(2023, 5, 9, 15, 0, 0, 0);
console.log(specificDate);
//A sintaxe é: Date(ano, mês, dia, hora, minuto, segundo, milissegundo).
//Note que os meses são indexados iniciando pelo zero, ou seja, começam com janeiro sendo 0 e finalizam com dezembro sendo 11.

console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"

const stringParaData = new Date("May 29, 2019 15:00:00");
console.log(stringParaData);
// Wed May 29 2019 15:00:00 GMT-0400 (Eastern Daylight Time)
