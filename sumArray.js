function sumArray(sum, num) {
    for (var i = 0; i < num.length; i++) {
         sum += num[i]
    }
    return sum
};

module.exports = sumArray;
