/*
[toLocaleUpperCase()]

O método toLocaleUpperCase() de valores String retorna esta string convertida em maiúsculas, de acordo com qualquer mapeamento de caso específico de localidade.

String.prototype.toLocaleUpperCase()

*/

const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleUpperCase("en-US")}`); //'EN-US: İSTANBUL'

console.log(`TR: ${dotted.toLocaleUpperCase("tr")}`); //'TR: İSTANBUL'
