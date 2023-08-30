// function ucFirs(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirs("string"));

function ucFirs(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(ucFirs("string"));
console.log(ucFirs("hello how are you"));
