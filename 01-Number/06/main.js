// let max = 6;
// let min = 1;
function getRandom(min, max) {
  for (let i = 0; i < 10; i++) {
    let r = min + Math.floor(Math.random() * (max - min + 1));
    console.log(r);
  }
}
console.log(getRandom(1, 5));
