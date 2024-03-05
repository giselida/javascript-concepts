/* 
[REDUZRIGHT]

O método reduzRight() de instâncias de Array aplica uma função em um acumulador e em cada valor do array (da direita para a esquerda) para reduzi-lo a um único valor.

Array.Prototype.reduceRight

reduzir uma coleção de itens a um único valor começando pelo final do array.
*/

function reverse(string) {
  return [...string].reduceRight((acc, cur) => `${acc}${cur}`, "");
}

const result = reverse("Está frase ficará ao contrário");
console.log(result); //'oirártnoc oa áracif esarf átsE'
