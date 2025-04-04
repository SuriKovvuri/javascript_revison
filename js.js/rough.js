let arr = [1,5,2,3,8,4,77,88]
console.log(arr)
let sort_arr = arr.sort();
console.log(sort_arr)
arr.sort(function(a,b){
	return a- b;
})
console.log(arr)
arr.sort(function(a,b) {
	return b- a;
})
console.log(arr)

//Real time example
let data = [{'name':'suri','age':24},
	{'name':'sita','age':37},
	{'name':'pandu', 'age':23}];
console.log(data)
data.sort(function(a,b){
	return a.age - b.age;
})
console.log(data)
data.sort(function(a,b){
	return b.age - a.age;
})
console.log(data)
