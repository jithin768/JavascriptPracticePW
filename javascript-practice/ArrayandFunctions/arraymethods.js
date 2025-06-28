let fruits=["Apple","Orange"]

fruits.push("Mango")

console.log(fruits)

//removed the last element from array
let removedfruit=fruits.pop()

console.log(removedfruit)

//Removed the first element from array

let removeFirst=fruits.shift();
console.log(removeFirst)

console.log(fruits)
let fruits1=["Apple","Orange","Mango"]
fruits1.splice(1,1,"Kiwi")
console.log(fruits1)



//Slice- (Returns a shallow copy of a portion of array into a new array, selected from start to end(end not included))
let fruits2=["Apple","Orange","Mango"]
let citrus=fruits2.slice(1,2)
console.log(citrus)
