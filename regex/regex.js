stringSearch();

function stringSearch() {
  const str = "Expressões regulares em JavaScript na DevMedia?";
  const n = str.search(/\?$/);
  console.log(n);
}
regexpExec();

function regexpExec() {
  const str = "Expressões regulares em JavaScript na DevMedia?";
  const regexp = new RegExp(/\?$/);
  const n = regexp.exec(str);
  console.log(n);
}
stringReplace();
function stringReplace() {
  const str = "Expressões regulares em JavaScript na DevMedia!";
  const n = str.replace(/[j+]/i, "g");
  console.log(n);
}
stringSplit();

function stringSplit() {
  const str = "Expressões regulares em JavaScript na DevMedia!";
  const n = str.split(/[\s+]/i);
  console.log(n);
}
// regexpTest();
// function regexpTest() {
//   const str = "Expressões regulares em JavaScript na DevMedia?";
//   const regexp = new RegExp(/\?$/);
//   const n = regexp.test(str);
//   console.log(n);
// }
let myRe = new RegExp(`^${str2[0]}.*${str2[0]}$`, "i");
let myArray = myRe.exec("cdbbdbsbz?");
console.log(myArray);

let str = "Hellooo World! Hello Mundoooooo!";
let pat1 = /o+/g;
let result = str.match(pat1);
console.log(result);
