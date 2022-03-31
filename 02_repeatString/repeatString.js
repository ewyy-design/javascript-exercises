const randomNumber = function() {
    const number = Math.floor(Math.random() * 1000) 
    return number;
}

const repeatString = function(string, num) {
    
    let output = "";
    if (num<0) {
        return ('ERROR')
    } else {
        for (let i=0;i<num;i++) {
            output = output + string;
        }
        return output; 
    } 
};

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
