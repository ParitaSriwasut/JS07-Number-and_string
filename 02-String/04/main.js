function checkRudeWorld(word) {
  if (word === "xxx" || word === "sex" || word === "porn") {
    return true;
  } else if (
    word === "XXX".toLowerCase() ||
    word === "pOrn".toLowerCase() ||
    word === "sEX".toLowerCase()
  ) {
    return false;
  } else {
    return false;
  }
}

console.log(checkRudeWorld("sex"));
console.log(checkRudeWorld("PoRn"));
