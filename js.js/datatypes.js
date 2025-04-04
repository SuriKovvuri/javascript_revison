//Number
let a = 81 //number type
console.log(typeof(a))

//string 
let text = "suri";
console.log(typeof(text))

//Boolean
let b =10;
let c = a < b;
console.log(c)
console.log(typeof(c))




//Non-primitive Datatypes


//Object : object is an instance of a class //each objcet consist of properties, which are defined as key-value pair
let data = {
	'name' : 'suri',
	'age' : 24,
	'place' : 'vijayawada',
	greet : function(){
		console.log(`This is ${data.name} from ${data.place}`)
		console.log("This is"  + this.name + "from" + this.place)
	}
}
console.log(data)
console.log(data.name)
console.log(data.place)
data.greet()

//add objects
data.gender = "male"
console.log(data)

//delete 
delete data.gender
console.log(data);





//Arrays : Array is a group of similar data types items, which cam store a common name  //Indext starts with zero [0]
	   //Key characterstics : Orderd , indexed, Flexible and Dynamic

let fruits = ["apple", "banana", "mango"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[2])

for(let i =0 ; i < fruits.length; i++) {
	console.log(fruits[i])
}

fruits.forEach(function(fruit){
	console.log(fruit)
})

//push and unshift push-> add data end of an array  unshift ->Add data begining of an array
fruits.push("pineapple")
console.log(fruits)
fruits.unshift("strawberry")
console.log(fruits)

//pop and shift  pop()->Removes the last element shift()->Removes the first element
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits)

//Funtins : A function is a block of code designed to perform a particular task.
//        : Resuability
function add(a,b){
	return a + b;
}
console.log(add(3,4))

let x = myFunction(4,5)
function myFunction(a,b){
	return a + b;
}
console.log(x)



//Dates
let date = new Date();
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())


//Map and Set  Map -> Map is a collection of Key-value pair, where keys and values are any type
//set(key, value) : add new key- value pair on Map
//get(key) : retrive the date 
//has(key) : check existing or not
//delete(key) : delete
//clear() : remove all key-value pairs in map
//size : size
//keys() : return iterates over an keys

let map = new Map();
console.log(map)
map.set('name', 'suri')
map.set('age', 24)
map.set('gender', 'male')
console.log(map)
console.log(map.get('age'))
console.log(map.has('name'))
console.log(map.size)
map.delete('name')
console.log(map)
map.clear();
console.log(map)













