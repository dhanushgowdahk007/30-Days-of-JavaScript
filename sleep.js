// https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    function callback(resolve, reject){
        setTimeout(resolve, millis);
    }

    return new Promise(callback);
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */