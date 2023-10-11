const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  let roundedNun = Math.round(celsius * 10) / 10
  return roundedNun;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius  * 9 / 5) + 32
  let roundedNun = Math.round(fahrenheit * 10) / 10

  return roundedNun
};

console.log(convertToFahrenheit(49.4))
console.log(convertToCelsius(-100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
