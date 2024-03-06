/*
[substring()]

O método substring() de valores String retorna a parte desta string desde o índice inicial até e excluindo o índice final, ou até o final da string se nenhum índice final for fornecido.

String.prototype.substring()

É similar ao slice, porem não aceita números negativos.

*/

const str = "Mozilla";

console.log(str.substring(1, 3)); //"oz"

console.log(str.substring(2)); //"zilla"
