const ftoc = function(num) {
  temp = (num - 32) * 5/9;
  if (temp % 1 == 0) {
    return temp;
  } else {
    return Number(temp.toFixed(1));
  }
};

const ctof = function(num) {
  temp = (num * 9/5) + 32;
  if (temp % 1 == 0) {
    return temp;
  } else {
    return Number(temp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
