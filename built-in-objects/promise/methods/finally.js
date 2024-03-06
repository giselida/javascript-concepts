/*
[finally()]

O método finally() das instâncias Promise agenda uma função a ser chamada quando a promessa for cumprida (cumprida ou rejeitada). Ele retorna imediatamente um objeto Promise equivalente, permitindo encadear chamadas para outros métodos de promessa.

*/

function checkMail() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    return randomNumber > 0.5 ? resolve("Mail has arrived") : reject(new Error("Failed to arrive"));
  });
}

checkMail()
  .then((mail) => console.log(mail))
  .catch((err) => console.error(err)) //[Error: Failed to arrive]
  .finally(() => console.log("Experiment completed")); //'Experiment completed'
