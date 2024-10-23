function divide(a, b) {
    if (b === 0) {              // 1. Check if b is zero
        throw new Error('Cannot divide by zero');  // 2. Throw a custom error if b is zero
    }
    return a / b;               // 3. Return the result of the division if no error
}

try {
    let result = divide(10, 0); // 4. Call the divide function inside a try block
    console.log(result);        // 5. If no error, print the result
} catch (error) {
    console.log("Error: " + error.message);  // 6. If an error occurs, catch it and log the error message
} finally {
    console.log("Execution complete.");  // 7. The finally block runs regardless of whether an error occurred or not
}

