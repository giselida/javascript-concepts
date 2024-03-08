/*
O operador ternário não serve apenas para definir valores de variáveis; você também pode executar funções ou linhas de código – o que quiser. O exemplo ao vivo a seguir mostra um seletor de tema simples onde o estilo do site é aplicado usando um operador ternário.

[syntax]

condition ? run this code : run this code instead

Basicamente sua sintaxe é, uma condição, valor 1 e valor 2. Caso a condição seja true, o valor 1 é retornado, caso contrário é retornado o valor 2.

*/

let idade = 10;
let podeDirigir = idade >= 18 ? "bom dia " : "boa noite";
console.log(podeDirigir); //true
