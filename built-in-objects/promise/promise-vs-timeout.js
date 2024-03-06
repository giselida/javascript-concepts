console.log(1); //1
setTimeout(() => {
  console.log(3); //3
}, 0);
console.log(2); //2
Promise.resolve(4).then((value) => console.log(value));
