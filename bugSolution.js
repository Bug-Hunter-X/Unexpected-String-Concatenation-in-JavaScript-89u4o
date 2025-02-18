function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    // Handle non-number inputs appropriately, perhaps throw an error or return a default value
    return NaN; // Or throw new Error('Invalid input types'); 
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: NaN