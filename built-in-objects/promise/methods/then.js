/*
[then()]

The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

*/
const promise = new Promise((resolve, reject) => {
  resolve("Success!");
  reject("Something Went Wrong!");
});

promise.then(
  (value) => {
    console.log(value); //'Success!'
  },
  (message) => {
    console.log(`Ocorreu o seguinte erro: ${message}`);
  }
);
