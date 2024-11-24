const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  if ((arr = [])) {
    return 0;
  } else {
    arr.reduce((total, current) => {
      total + current;
      return total;
    }, 0);
  }
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let total = num;

  for (let i = 1; i < num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
