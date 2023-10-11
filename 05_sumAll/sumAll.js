const sumAll = function(num1, num2) {
    let sum = 0
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return 'ERROR'
    } else {
        for (let i = num1; i >= num2; i--){
        
            sum += i
        }
    }
    

    console.log(sum)
    return sum 
};

sumAll(9, 5)

// Do not edit below this line
module.exports = sumAll;
