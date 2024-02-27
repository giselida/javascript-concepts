/*
[Escopos]

As cadeias de escopo estabelecem o escopo para uma determinada função. Cada função definida tem seu próprio escopo aninhado, e qualquer função definida dentro de outra função tem um escopo local que está vinculado à função externa — esse elo é chamado de cadeia.
​
*/
//Cadeia de Escopo
let number = 10;

function getNumber() {
  // escopo da função ou escopo local
  console.log(number); //10
  function logNumber() {
    // escopo da função ou escopo local
    console.log(number); //10
  }
  logNumber();
}
getNumber();
