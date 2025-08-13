/**
 * A simple calculator program to perform basic arithmetic operations.
 * Supported operations: Addition, Subtraction, Multiplication, Division
 *
 * Usage: node calculator.js <operation> <number1> <number2>
 * Example: node calculator.js add 5 3
 *
 * The calculator supports the following operations:
 *
 *     add
 *     sub
 *     mul
 *     div
 *
 */

// Retrieve command line arguments (excluding 'node' and the script filename)
const args = process.argv.slice(2);

// Validate that exactly three arguments are provided
if (args.length !== 3) {
    console.error('Usage: node calculator.js <operation> <number1> <number2>');
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

// Perform the calculation based on the operation provided
let result;
switch (operation.toLowerCase()) {
    case 'add':
        result = a + b;
        break;
    case 'sub':
        result = a - b;
        break;
    case 'mul':
        result = a * b;
        break;
    case 'div':
        if (b === 0) {
            console.error('Error: Division by zero is not allowed.');
            process.exit(1);
        }
        result = a / b;
        break;
    default:
        console.error(`Unsupported operation: ${operation}`);
        console.error('Supported operations: add, subtract, multiply, divide');
        process.exit(1);
}

// Output the result
console.log(`Result of ${operation}ing ${a} and ${b} is: ${result}`);
