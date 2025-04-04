/*
    Arrow Functions:
        Arrow Functions allows us to create shorthand syntax
        Arrow Functions were introduced in ES6

        Syntax:
        const function_name = () => {.....}
*/

//Example

//old version ES5
function add(num1, num2) {
    console.log("Add")
    return num1 + num2
}
console.log(add(4,5))


//New Version is called ES6
const add = (num1,num2) => {
    console.log("Add")
    return num1 + num2
}
console.log(add(4,5))

//Here no need to return values
const sub = (num1, num2) =>  num1 - num2;
console.log(sub(5,4))

const oneValue = num1 => num1
console.log(oneValue(45))