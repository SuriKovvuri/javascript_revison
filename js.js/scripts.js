//111111111111111111111111Reverse a string11111111111111111111111111111
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('suri')); // Output: 'irus'

//Explaination:
// -->'suri'.split('') becomes ['s', 'u', 'r', 'i'].
// --> ['s', 'u', 'r', 'i'].reverse() becomes ['i', 'r', 'u', 's'].
// --> ['i', 'r', 'u', 's'].join('') becomes 'irus'.



//function reverseString(str) {
//  return str.split('').reverse().join('');
//}

//const inputString = "Hello, World!";
//const reversedString = reverseString(inputString);
//console.log(reversedString);  // Output: !dlroW ,olleH

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


















//Remove Duplicate
let arr = [1,2,3,3,3,4,5,7,7,6,6,8];
let sort = [...new Set(arr)]
console.log(sort)
let mm= sort.sort();
console.log(mm)
let ss = sort.sort((a,b) => a-b)
console.log(ss)

//method2 using for loop
let arra =[1,2,2,3,3,4,5,6,7]
let rmuniqe = [];
let seen = {};

for(let i=0; i<arra.length; i++) {
    if(!seen[arra[i]]) {
        seen[arra[i]] = true,
        rmuniqe.push(arra[i]);
    }
}
console.log(rmuniqe)












//Sorting an array
//With out using function:
let actaual = [1,7,3,89,3,5,7];
let sortorder = actaual.sort();
console.log(sortorder)


//using function
actaual.sort(function(a,b) {
        return a - b;
})
console.log(actaual)

actaual.sort(function(a,b) {
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

people.sort(function(a,b){
        return a.age - b.age;
})
console.log(people)


//Example2:
let mixedArray = [12, "apple", 5, "Banana", "orange", 25, "Mango"];
mixedArray.sort(function(a,b) {
        if(typeof a === "number" && typeof b === "number"){
                return a - b;
        }
        else if(typeof a === "string" && typeof b === "string") {
                return a.toLowerCase().localeCompare(b.toUpperCase());
        }
        else if (typeof a === "number") {
                return -1;
        }else{
                return 1;
        }
})
console.log(mixedArray)











//Palindrome or not:

function isPalindrome(str) {
  // Convert string to lowercase
  str = str.toLowerCase();

  // Remove non-alphanumeric characters (without regex)
  let cleanStr = '';
  for (let char of str) {
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleanStr += char;
    }
  }

  // Reverse the cleaned string
  let reversedStr = '';
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedStr += cleanStr[i];
  }

  // Check if the cleaned string is equal to the reversed string
  return cleanStr === reversedStr;
}

// Example usage
console.log(isPalindrome("Racecar"));   // true
console.log(isPalindrome("Hello"));     // false
console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true













//Largest and Highest number in an array:
let numbers = [34, 7, 23, 32, 5, 62];
let largest = Math.max(...numbers); // Spread the array into individual arguments

console.log("The largest number is:", largest); // Output: The largest number is: 62



//Method2
//let numbers = [34, 7, 23, 32, 5, 62];
//let largest = numbers[0]; // Assume the first number is the largest

//for (let i = 1; i < numbers.length; i++) {
//  if (numbers[i] > largest) {
//    largest = numbers[i]; // Update largest if current number is greater
//  }
//}

//console.log("The largest number is:", largest); // Output: The largest number is: 62









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


















//FibonacciSeries
function fibonacciSeries(n){
    let fibanociiAfter = [];
    let a = 0;
    let b = 1;
    for(let i=0; i<n; i++) {
        fibanociiAfter.push(a);
            let next = a + b;
            a = b;
            b = next;
    }
        return fibanociiAfter;
}
let turns = 10;
console.log(fibonacciSeries(turns))











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
