/*
[race()]

O método estático Promise.race() recebe um iterável de promessas como entrada e retorna uma única promessa. Esta promessa devolvida se estabelece com o estado final da primeira promessa que se estabelece.

*/

async function getCepFromViaCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  return response.json();
}

async function getCepFromApiCep(cep) {
  const url = `https://ws.apicep.com/cep/${cep}.json`;
  const response = await fetch(url);
  return response.json();
}

Promise.race([getCepFromViaCep("30580585"), getCepFromApiCep("30580-585")]).then((data) => {
  console.log(data);
  /*
  { status: 200,
  ok: true,
  code: '30580-585',
  state: 'MG',
  city: 'Belo Horizonte',
  district: 'Betânia',
  address: 'Rua D',
  statusText: 'ok' } 
  */
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value); //"two"
});
