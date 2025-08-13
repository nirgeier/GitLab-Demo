/**
 * Calculator utility functions for advanced operations
 * 
 * @author GitLab Demo Team
 * @version 1.0.0
 */

/**
 * Calculate the power of a number
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The result of base^exponent
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Calculate the square root of a number
 * @param {number} num - The number to calculate square root for
 * @returns {number} The square root
 */
function sqrt(num) {
    if (num < 0) {
        throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(num);
}

/**
 * Calculate factorial of a number
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial
 */
function factorial(n) {
    if (n < 0) {
        throw new Error('Cannot calculate factorial of negative number');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    power,
    sqrt,
    factorial
};
