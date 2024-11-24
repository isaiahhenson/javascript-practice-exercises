const fibonacci = function (int) {
  let sequence = [0, 1];

  if (int < 0) {
    return 'OOPS';
  } else {
    for (let i = 2; i <= int; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  }
  return sequence[sequence.length - 1];
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
