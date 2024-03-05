/*
[ARRAY]

O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

[O que é um array?]

Os arrays são estruturas que servem para guardar dados, e organizá-los. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice.

Em JavaScript, os arrays não são primitivos, mas sim objetos Array com as seguintes características principais:

arrays são geralmente descritos como "list-like objects"; eles são basicamente objetos únicos que contêm vários valores armazenados em uma lista. Objetos array podem ser armazenados em variáveis e tratados da mesma forma que qualquer outro tipo de valor, a diferença é que podemos acessar cada valor dentro da lista individualmente, e fazer coisas super úteis e eficientes com a lista, como loop through e faça a mesma coisa com todos os valores. Talvez tenhamos uma série de itens de produtos e seus preços armazenados em uma matriz e queiramos percorrer todos eles e imprimi-los em uma fatura, enquanto totalizamos todos os preços e imprimimos o preço total na parte inferior.

[Arrays JavaScript] são redimensionáveis e podem conter uma combinação de diferentes tipos de dados. (Quando essas características forem indesejáveis, use matrizes digitadas.)

[Arrays JavaScript] não são matrizes associativas e, portanto, os elementos da matriz não podem ser acessados usando strings arbitrárias como índices, mas devem ser acessados usando números inteiros não negativos (ou sua respectiva forma de string) como índices.

[Arrays JavaScript] são indexadas em zero: o primeiro elemento de uma matriz está no índice 0, o segundo está no índice 1 e assim por diante - e o último elemento está no valor da propriedade de comprimento da matriz menos 1.

[As operações de cópia de array JavaScript] criam cópias superficiais. (Todas as operações de cópia integradas padrão com quaisquer objetos JavaScript criam cópias superficiais, em vez de cópias profundas).

[Índices de matriz]

Objetos array não podem usar strings arbitrárias como índices de elementos (como em um array associativo), mas devem usar inteiros não negativos (ou sua respectiva forma de string). Definir ou acessar por meio de números não inteiros não definirá ou recuperará um elemento da própria lista do array, mas definirá ou acessará uma variável associada à coleção de propriedades do objeto desse array. As propriedades do objeto da matriz e a lista de elementos da matriz são separadas e as operações de passagem e mutação da matriz não podem ser aplicadas a essas propriedades nomeadas.

Os elementos do array são propriedades de objetos da mesma forma que toString é uma propriedade (para ser mais específico, entretanto, toString() é um método). No entanto, tentar acessar um elemento de um array da seguinte forma gera um erro de sintaxe porque o nome da propriedade não é válido:

arr.0; // a syntax error

A sintaxe JavaScript requer que as propriedades que começam com um dígito sejam acessadas usando notação de colchetes em vez de notação de ponto. Também é possível citar os índices do array (por exemplo, years['2'] em vez de years[2]), embora geralmente não seja necessário.

O 2 em anos[2] é convertido em uma string pelo mecanismo JavaScript por meio de uma conversão toString implícita. Como resultado, '2' e '02' se refeririam a dois slots diferentes no objeto anos, e o exemplo a seguir poderia ser verdadeiro:

console.log(years["2"] !== years["02"]);

Apenas years['2'] é um índice de array real. years['02'] é uma propriedade de string arbitrária que não será visitada na iteração do array.
*/
