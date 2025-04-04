//if else:
let age = 20;
if (age > 18 ){
	console.log("Adult")
} else {
	console.log("Not Adult")
}

//elseif statement:

if(condition){
}
else if(condition){
}
else{
}

//switch:
let grade = 'B'
let result;

switch (grade) {
    case 'A':
        result = "A Grade"
        break;
    case 'B':
        result = "B Grade"
        break;
    case 'C':
        result = "C Grade"
        break;

    default:
        result = "No Grade"
}

console.log(result)