const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let total = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
  }
  return total;
};

const multiply = function (arr) {
  return arr.reduce((total, current) => total * current);
};

// const multiply = function (array) {
//   return array.reduce((product, current) => product * current);
// };

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let total = num;

  if (num === 0) {
    total = 1;
  }
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
