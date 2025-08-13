/**
 * A simple calculator program to perform basic arithmetic operations.
 * Supported operations: add, sub, mul, div
 *
 * Usage:
 *   Normal mode: node calc.js <operation> <number1> <number2>
 *   Testing mode: node calc.js test
 * Example: node calc.js add 5 3
 */

const assert = require('assert');

// Function to perform the calculation.
function calculate(operation, a, b) {
    switch (operation.toLowerCase()) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            if (b === 0) {
                throw new Error('Division by zero is not allowed.');
            }
            return a / b;
        default:
            throw new Error(`Unsupported operation: ${operation}`);
    }
}

// Function to run unit tests.
function runTests() {
    console.log('Running tests...');

    // Test addition
    assert.strictEqual(calculate('add', 2, 3), 5, 'Addition failed');

    // Test subtraction
    assert.strictEqual(calculate('sub', 5, 3), 2, 'Subtraction failed');

    // Test multiplication
    assert.strictEqual(calculate('mul', 4, 3), 12, 'Multiplication failed');

    // Test division
    assert.strictEqual(calculate('div', 10, 2), 5, 'Division failed');

    // Test division by zero
    assert.throws(() => calculate('div', 10, 0), /Division by zero is not allowed/, 'Division by zero did not throw error');

    // Test unsupported operation
    assert.throws(() => calculate('mod', 10, 3), /Unsupported operation/, 'Unsupported operation did not throw error');

    console.log('All tests passed.');
}

// Get command line arguments (excluding 'node' and this file name).
const args = process.argv.slice(2);

// If user runs tests
if (args.length === 1 && args[0].toLowerCase() === 'test') {
    runTests();
    process.exit(0);
}

// Validate that exactly three arguments are provided for normal mode
if (args.length !== 3) {
    console.error('Usage: node calc.js <operation> <number1> <number2>');
    process.exit(1);
}

const [operation, num1, num2] = args;

// Convert string arguments to numbers
const a = parseFloat(num1);
const b = parseFloat(num2);

// Check if both numbers are valid
if (isNaN(a) || isNaN(b)) {
    console.error('Both number1 and number2 should be valid numbers.');
    process.exit(1);
}

// Perform the calculation and output the result.
try {
    const result = calculate(operation, a, b);
    console.log(`Result of ${operation} with ${a} and ${b} is: ${result}`);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
