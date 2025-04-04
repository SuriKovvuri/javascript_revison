//////////////////// Armstrong Number ///////////////
function is_armstrong(num){
    let digit = num.toString()
    let power = digit.length
    
    let total = 0
  
        for (let d = 0; d < digit.length; d++) {
        total += Math.pow(parseInt(digit[d]), power);
    }
  return total  
    
}
console.log(is_armstrong(153))






//////////////////////Reverse a string ////////////////////
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('suri')); // Output: 'irus'

//Explaination:
// -->'suri'.split('') becomes ['s', 'u', 'r', 'i'].
// --> ['s', 'u', 'r', 'i'].reverse() becomes ['i', 'r', 'u', 's'].
// --> ['i', 'r', 'u', 's'].join('') becomes 'irus'.



//Simple code
let string = "suri";
let reverseStr = string.split('').reverse().join('')
console.log(string)
console.log(reverseStr)



//Using Iterate:
let str = "Hello, World!";
let reversedString = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
}

console.log(reversedString);  // Output: !dlroW ,olleH




/////////////////////// Find Largest and smallest number //////////////////// 
let list =  [1,2,3,4,9,8,6]
let max = list[0]

for (let i =0; i<list.length; i++){
    if(max < list[i]){
        max = list[i]
    }
}
console.log(max)


let lists =  [1,2,3,4,9,8,6]
let maxs = lists[0]
for (let i =0; i<lists.length; i++){
    if(maxs > lists[i]){
        maxs = lists[i]
    }
}
console.log(maxs)


//Largest and Highest number in an array:
let numbers = [34, 7, 23, 32, 5, 62];
let largest = Math.max(...numbers); // Spread the array into individual arguments
let smallest = Math.min(...numbers)
console.log("The largest number is:", largest); // Output: The largest number is: 62
console.log("The largest number is:", smallest);




//////////////////////////// palindrome //////////////////////////
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('')
    return reversed === str
}
console.log(isPalindrome("madam"))



function isPalindrome(s) {
    s = s.toLowerCase(); // Convert to lowercase for case insensitivity
    let length = s.length;

    for (let i = 0; i < length / 2; i++) {
        console.log(`Comparing ${s[i]} with ${s[length - i - 1]}`); // Print each comparison
        if (s[i] !== s[length - i - 1]) {
            console.log("Not a palindrome ❌");
            return false;
        }
    }
    console.log("It's a palindrome ✅");
    return true;
}

console.log(isPalindrome("madam"))




//////////////////////// Factorial of a number /////////////////////////////
function Factorial(n) {
    if (n === 0) return 1;
    return n * Factorial(n - 1)
}
console.log(Factorial(3))

//Factorial:
function factorialRecursive(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1; // Base case: 0! and 1! are both 1
    }
    return n * factorialRecursive(n - 1); // Recursive case
}
// Example usage
let numberRecursive = 5;
console.log(`Factorial of ${numberRecursive} (Recursive):`, factorialRecursive(numberRecursive));




/////////////////////////// Prime Number or not //////////////////////////
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Test case
console.log(isPrime(7));  // true





///////////////////////////// fibonacci ////////////////////////////////
function fibonacci(n) {
    let a = 0, b = 1;
    let sequence = []; // To store the Fibonacci sequence

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b]; // Swap values using array destructuring
    }
    return sequence;
}

// Example usage
console.log(fibonacci(10)); // Generate first 10 Fibonacci numbers


// Fibonacci Sequence (Iterative)
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return n === 0 ? a : b;
}

fibonacci(5); // 5

//FibonacciSeries
function fibonacciSeries(n) {
    let fibanociiAfter = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        fibanociiAfter.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return fibanociiAfter;
}
// let turns = 10;
console.log(fibonacciSeries(10))






////////////////////////// Remove Duplicate ////////////////////////////   
let arr = [1, 2, 3, 3, 3, 4, 5, 7, 7, 6, 6, 8];
let sort = [...new Set(arr)]
console.log(sort)
let mm = sort.sort();
console.log(mm)
let ss = sort.sort((a, b) => a - b)
console.log(ss)



//method2 using for loop
let arra = [1, 2, 2, 3, 3, 4, 5, 6, 7]
let rmuniqe = [];
let seen = {};

for (let i = 0; i < arra.length; i++) {
    if (!seen[arra[i]]) {
        // console.log(seen[arr[i]])
        seen[arra[i]] = true,
            rmuniqe.push(arra[i]);
    }
}
console.log(rmuniqe)



//Sorting an array
//With out using function:
let actaual = [1, 7, 3, 89, 3, 5, 7];
let sortorder = actaual.sort();
console.log(sortorder)


//using function
actaual.sort(function (a, b) {
    return a - b;
})
console.log(actaual)

actaual.sort(function (a, b) {
    return b - a;
})
console.log(actaual)

//RealTime example:
// Array of objects (people)
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 32 }
];

people.sort(function (a, b) {
    return a.age - b.age;
})
console.log(people)


//Example2:
let mixedArray = [12, "apple", 5, "Banana", "orange", 25, "Mango"];
mixedArray.sort(function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a - b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.toLowerCase().localeCompare(b.toUpperCase());
    }
    else if (typeof a === "number") {
        return -1;
    } else {
        return 1;
    }
})
console.log(mixedArray)







//Merge two arrays using
let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
let c = a.concat(b)
console.log(c)


//Leveraging the Spread Operator ([...array1, ...array2])
const d = [1, 2, 3];
const e = [4, 5, 6];
d.push(...e);
console.log(d); // Output: [1, 2, 3, 4, 5, 6]


//Modifying Arrays In-Place with the push() Method
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]



//Merge Two Sorted Arrays
function mergeSortedArray(a, b) {
    console.log("Initial Array A:", a);
    console.log("Initial Array B:", b);

    // Merge array b into array a
    for (var i = 0; i < b.length; i++) {
        console.log(`Pushing ${b[i]} from B into A`);
        a.push(b[i]);
    }

    console.log("Merged Array (Before Sorting):", a);

    // Sort the merged array using bubble sort
    for (i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                // Swap elements
                console.log(`Swapping ${a[i]} and ${a[j]}`);
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        console.log(`Array after iteration ${i + 1}:`, a);
    }

    return a;
}

// Example usage
console.log("Final Merged and Sorted Array:", mergeSortedArray([1, 2, 3, 5, 9], [4, 6, 7, 8]));



