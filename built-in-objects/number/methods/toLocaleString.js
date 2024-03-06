/*
[toLocaleString()]

O método toLocaleString() de valores numéricos retorna uma string com uma representação deste número sensível ao idioma. Em implementações com suporte à API Intl.NumberFormat, esse método simplesmente chama Intl.NumberFormat.

Number.prototype.toLocaleString
            
converte um número em uma string usando 
a localização atual ou uma especificada
*/

const number = 123456.789;
console.log(number.toLocaleString()); //'123,456.789'

// usando o parâmetro locales
console.log(number.toLocaleString("pt-BR")); //'123.456,789'
console.log(number.toLocaleString("ar-EG")); //'١٢٣٬٤٥٦٫٧٨٩'

// usando o parâmetro options

const formatEur = number.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(formatEur); //'R$ 123.456,79'

const formatJapan = number.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY",
});
console.log(formatJapan); //'￥123,457'
