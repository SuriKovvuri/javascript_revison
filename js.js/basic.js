let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 32 }
  ];


//using funtion
people.sort(function(a,b){
    return a.age -b.age
})
console.log("Sorted to ascending order: " , people)

people.sort(function(a,b){
    return b.age - a.age 
})
console.log(people)