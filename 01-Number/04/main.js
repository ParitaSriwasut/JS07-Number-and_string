const num = 3.566;

//const result = num.toFixed(2);
const result = Math.floor((num * 100) / 100).toFixed(2);
console.log(result);

// let trunc = (num) =>
// {
//   return (Math.floor(num * 100) / 100).toFixed(2);
// }
