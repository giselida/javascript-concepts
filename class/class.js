/*
[Class]

As classes são um modelo para a criação de objetos. Eles encapsulam dados com código para trabalhar com esses dados. As classes em JS são construídas em protótipos, mas também possuem algumas sintaxes e semânticas exclusivas das classes.

As classes são na verdade "funções especiais" e, assim como você pode definir expressões e declarações de funções, uma classe pode ser definida de duas maneiras: uma expressão de classe ou uma declaração de classe.

Assim como as functions expressions, as expressões de classe podem ser anônimas ou ter um nome diferente da variável à qual estão atribuídas. No entanto, diferentemente das declarações de função, as declarações de classe têm as mesmas restrições de zona morta temporal que let ou const e se comportam como se não fossem içadas.

O corpo de uma classe é a parte que está entre chaves {}. É aqui que você define os membros da classe, como métodos ou construtor.

[Class body]

O corpo de uma classe é executado em modo estrito mesmo sem a diretiva "use strict".

Um elemento de classe pode ser caracterizado por três aspectos:

Tipo: getter, setter, método ou campo
Localização: estática ou instância
Visibilidade: Pública ou privada

[Constructor]

O método construtor é um método especial para criar e inicializar um objeto criado com uma classe. Só pode haver um método especial com o nome "construtor" em uma classe — um SyntaxError será lançado se a classe contiver mais de uma ocorrência de um método construtor.

Um construtor pode usar a palavra-chave super para chamar o construtor da superclasse.

Você pode criar propriedades de instância dentro do construtor:

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

*/

// [Defining classes]
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; a classe é anônima, mas atribuída a uma variável
const Block = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; a classe tem seu próprio nome
const Circle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

const object = {
  name: "João",
  age: 21,
  job: "Software Engineer",
};

class Pessoa {
  name;
  age;
  job;
  tipoSanguineo = "O";
  constructor(name, age, job) {
    console.log(name, age, job, this);
    this.name = name;
    this.age = age;
    this.job = job;
    // Object.freeze(this);
  }

  static age = 25;
}

class NovaPessoa extends Pessoa {
  hobby = "Jogar";
  constructor(nome) {
    super(nome, 15, "Nenhum");
  }

  correr() {
    return "Estou correndo...";
  }
}

Pessoa.age = 0;
Pessoa.job = "Software Engineer";
console.log(Pessoa.age, Math.PI);
console.log(new Pessoa("Giselida", 20, "Front-end Developer"));
console.log(new NovaPessoa("Ana Luíza").correr());
const instance = new Pessoa("João", 21, "Software Engineer");
console.log(instance);
instance.name = "Giselida";
console.log(instance);
console.log(object);

// String.prototype.voar = function (param) {
// return this.split("").join();
// };

// console.log("string".voar());
// console.log("Giselida".voar());
// console.log("João".voar());
// console.log("Roberto".voar());
