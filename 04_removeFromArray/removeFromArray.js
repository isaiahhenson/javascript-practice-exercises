const removeFromArray = function(arr, ...args) {

    for (i = 0; i < args.length; i++){
        let index = arr.indexOf(args[i])

        if (index !== -1){
            arr.splice(index, 1)
        } 
    }
    return arr 
};



console.log(removeFromArray([1,2,3,4,5],4,5, '1'))

// Do not edit below this line
module.exports = removeFromArray;
