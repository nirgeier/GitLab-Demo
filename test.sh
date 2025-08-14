#!/bin/bash

# Test script for calculator application

echo "Running Calculator Tests..."

# Run the built-in unit tests
node calc.js test

echo ""
echo "Running integration tests..."

# Test basic operations
echo "Testing addition: 5 + 3"
result=$(node calc.js add 5 3)
echo "$result"

echo "Testing subtraction: 10 - 4"
result=$(node calc.js sub 10 4)
echo "$result"

echo "Testing multiplication: 6 * 7"
result=$(node calc.js mul 6 7)
echo "$result"

echo "Testing division: 20 / 4"
result=$(node calc.js div 20 4)
echo "$result"

echo ""
echo "All tests completed!"
