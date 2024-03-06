/*
[call()]

O método call() de instâncias de Function chama esta função com um determinado valor this e argumentos fornecidos individualmente.
*/
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  logProperties() {
    console.log(`Name: ${this.name} | Price: ${this.price}`); //'Name: John | Price: 12.2'
  }
}
const obj = new Product("John", 12.2);

class Food {
  constructor(name, price) {
    obj.logProperties.call(obj, name, price);
  }
}
