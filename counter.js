// https://leetcode.com/problems/counter/editorial/?envType=study-plan-v2&envId=30-days-of-javascript

// Related Concepts: closures and lexical environment.

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */