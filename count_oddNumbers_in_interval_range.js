//Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
//first approach
 var countOdds = function (low, high) {
    let ctr;
    ctr = Math.floor((high - low) / 2);
    if (high % 2 !== 0 || low % 2 !== 0) {
        ctr++;
    }
    return ctr;
};

//Another way of solving
var countOdds = function(low, high) {
    const lowerLow = parseInt(low/2);
    const lowerHigh = high%2 === 0 ? high/2 : parseInt(high/2)+1
    
    return lowerHigh - lowerLow
	};