//for loop:
//for loop is used to iterate over a block of code a specific number of times, or while a certain condition holds true.

//syntax:
//for (initialization; condition; increment/decrement) {
//}

for (let i=0; i<5; i++){
	console.log("passed" + i)
}

let fruits = ["apple", "banana", "mango"]
for(let i =0; i<fruits.length; i++){
	console.log("fruits" + i)
}

//forEach

fruits.forEach(function(fruit) {
	console.log("passed" +fruit)
})

//While loop
// while(condition) {
// }
let count = 0;
while (count < 5) {
	count++;
	console.log("passed" + count)
}

