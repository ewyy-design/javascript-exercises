const removeFromArray = function(array, ...toRemove) {
    for (i=0;i<array.length;i++) {
        if (array.includes(toRemove[i])) {
            array.splice(array.indexOf(toRemove[i]), 1)
        }
    }
    return array;
};

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
