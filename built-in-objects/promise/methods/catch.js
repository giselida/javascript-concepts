/*
[catch()]

O método catch() das instâncias Promise agenda uma função a ser chamada quando a promessa for rejeitada. Ele retorna imediatamente um objeto Promise equivalente, permitindo encadear chamadas para outros métodos de promessa. É um atalho para Promise.prototype.then(indefinido, onRejected).

*/
const p1 = new Promise((_, reject) => {
  reject("Something Went Wrong!");
});

p1.catch((error) => console.log(`P1 -- ${error} `)); //'P1 -- Something Went Wrong! '

const p2 = Promise.reject("P2 -- SWW");
p2.catch((error) => console.log(error)); //'P2 -- SWW'

const p3 = Promise.reject(new Error("Error SWW"));
p3.catch((error) => console.log(`P3 -- ${error.message} `)).then(() => console.log("P3 -- Error Handled")); //'P3 -- Error SWW'
//"P3 -- Error Handled";

const promise1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

promise1.catch((error) => {
  console.error(error); //Error: Uh-oh!
});
