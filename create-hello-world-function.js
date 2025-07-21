// https://leetcode.com/problems/create-hello-world-function/editorial/?envType=study-plan-v2&envId=30-days-of-javascript

// Related Concepts : closures and higher-order functions

/**
 * @return {Function}
 */
let createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// const f = createHelloWorld();

// const Hello = f();
// console.log(Hello); // "Hello World"