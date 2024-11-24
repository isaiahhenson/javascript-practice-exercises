const palindromes = (str) => {
  let ourStr = str.toLowerCase();
  const reversedStr = ourStr.split('').reverse().join('');

  console.log(ourStr, reversedStr);

  if (ourStr === reversedStr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
