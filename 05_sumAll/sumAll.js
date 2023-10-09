const sumAll = function(num1, num2) {
    let sum = 0

    for (let i = num1; i <= num2; i++){
        sum += i
    }

    console.log(sum)
    return sum 
};

sumAll(1, 5)

// Do not edit below this line
module.exports = sumAll;
