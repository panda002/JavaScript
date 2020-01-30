module.exports.adder = function (a,b) {
    return `the sum of the 2 numbers is ${a+b}`
};

module.exports.counter = function sumArray(sum, num) {
    for (var i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return sum
};


module.exports.pi = 3.124;

/*
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;*/

/*Another was to export the functions
module.exports = {
counter: counter,
adder: adder,
pi: pi
};
*/
