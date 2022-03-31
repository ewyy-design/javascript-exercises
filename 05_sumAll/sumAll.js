const sumAll = function(first, ...last) {
    let sum = 0;

    if (first > last) {
        for (i=first;i>=last;i--) {
            sum = sum + i
        }
        return sum
    } else if (first < 0 || last < 0 && typeof last == 'string') {
        return ('ERROR');
    } else {
        for (i=first;i<=last;i++) {
            sum = sum + i;
        }
        return sum;
    }    
}
    
sumAll(10, "90")

// Do not edit below this line
module.exports = sumAll;
