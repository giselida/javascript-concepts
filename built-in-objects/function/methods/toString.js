/*
[toString()]

O método toString() de instâncias de Function retorna uma string representando o código-fonte desta função.

*/

function foo() {
  return "bar";
}

console.log(foo + "");
/*
'function foo() { 
    var $_$c = $_$wf(1); 
    return $_$w(1, 0, $_$c), \'bar\'; 
}'  
*/
console.log(foo.toString());
/*
'function foo() { 
    var $_$c = $_$wf(1); 
    return $_$w(1, 0, $_$c), \'bar\'; 
}'
*/
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
/*
'function sum(a, b) { 
    var $_$c = $_$wf(1); 
    return $_$w(1, 3, $_$c), a + b; 
}'
*/

console.log(Math.abs.toString());
/*
'function abs() { [native code] }'
 */
