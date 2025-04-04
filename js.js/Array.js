/*                    ======Array Methods==========
Method	Description
map()	Creates a new array by transforming each element
filter()	Creates a new array with elements that pass a condition
reduce()	Reduces the array to a single value (sum, total, object, etc.)
includes()	Checks if the array contains a value, returns true/false
find()	Returns the first element that satisfies a condition
some()	Returns true if any element passes the condition
every()	Returns true if all elements pass the condition


Which ones return a new array?
✅ map()
✅ filter()

🎯 Which ones return a single value?
✅ reduce()
✅ find() (returns element or undefined)
✅ some(), every(), includes() (return true / false)
*/

/*
What is map()?
map() creates a new array by applying a function to each element of the original array.
It does not change the original array.
*/
const a = [1,2,3,4,5,6]
const add = a.map(x => x +2)
console.log(a)
console.log(add)


/*
What is filter()?
The filter() method creates a new array that includes only the elements that pass a specific condition (test).
*/
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

/*
What is reduce()?
The reduce() method reduces an array to a single value by executing a callback function on each element, accumulating a result as it goes.
*/

const numberss = [1, 2, 3, 4, 5];
const total = numberss.reduce((x, y) => x + y, 0);
console.log(total); // 15


/*
What is find()?
The find() method returns the first element in an array that satisfies a given condition.
If no match is found, it returns undefined
*/
const fruits = ["apple", "banana", "orange"]
const finds = fruits.find(x => x === "apple") 
console.log(finds)



/*
 What is some() in JavaScript?
The some() method checks if at least one element in an array satisfies a condition.
Returns true if any one element passes the test.
Returns false if none do.

Method	        Returns true if...	            
some()	        At least one passes	            
every()	        All must pass	               

*/
const numbersss = [3, 7, 9, 12];
const hasBigNumber = numbersss.some(num => num > 10);
console.log(hasBigNumber); // true

const nums = [1, 3, 5, 7];
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // false

const ever = [2,4,6,8]
const hasevery = ever.every(x => x % 2 == 0)
console.log(hasevery)


/*
includes()	Checks if value exists	   eg:arr.includes("apple")
*/
const text = "Hello World";
console.log(text.includes("World")); // true










/*
Basics: push, pop, shift, unshift, length

Search: includes, indexOf, find, findIndex
Transform: map, filter, reduce
Test: some, every

Modify: splice, slice, sort, reverse, fill

Advanced: flat, flatMap, copyWithin, Array.from, Array.of
*/


// push()	Add item to the end
let arr = [1, 2, 3, 4];
let pushs = arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]

// pop()	Remove item from the end
arr.pop();
console.log(arr); // [1, 2, 3, 4]

// unshift()	Add item to the beginning
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4]

// shift()	Remove item from the beginning
arr.shift();
console.log(arr); // [1, 2, 3, 4]

// length	Get the number of elements
console.log(arr.length); // 4


// slice() - Get a portion
// splice() – Add/remove items
/*
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4))



console.log(arr.splice(2, 1)) 

 0   1   2   3   4
[1,  2,  3,  4,  5]

Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

Here:
2 → Start at index 2 (element 3)
1 → Remove 1 element
No additional items are added.


arr.splice(2, 0, 99);
console.log(arr)

Here:
2 → Start at index 2 (before 4).
0 → Remove 0 elements (meaning no deletions).
99 → Insert 99 at index 2.

*/



//sort() and reverse()
const b = [1,2,3,4,5,6]
const sort = b.sort()
console.log(sort)

console.log(b.reverse())