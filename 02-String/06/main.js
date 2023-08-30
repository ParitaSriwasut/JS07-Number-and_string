function extractCurrencyValue(string, rate) {
  return string.slice(1) * rate;
}
console.log(extractCurrencyValue("$120", 30));
