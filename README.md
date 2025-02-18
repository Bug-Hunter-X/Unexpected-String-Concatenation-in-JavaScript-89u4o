# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript: unexpected string concatenation due to loose typing.  The `foo` function intends to add two numbers, but because of type coercion, it performs string concatenation when one of the inputs is a string.

## Bug Description
The JavaScript code in `bug.js` demonstrates how the `+` operator behaves differently when used with numbers and strings. If one operand is a string, the other is coerced into a string, leading to concatenation instead of addition.

## Solution
The `bugSolution.js` file shows a corrected version that uses explicit type checking or conversion to ensure numerical addition occurs as intended.