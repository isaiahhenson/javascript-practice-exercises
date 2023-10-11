const leapYears = function(leapYear) {
    if (leapYear % 100 === 0 && leapYear % 400 !== 0){
        return false
    } else if (leapYear % 400 === 0 || leapYear % 4 === 0){
        return true
    } else 
        return false
};

console.log(leapYears(1997))
// Do not edit below this line
module.exports = leapYears;
