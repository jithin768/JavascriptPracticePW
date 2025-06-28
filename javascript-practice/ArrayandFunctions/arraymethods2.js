//Slice- (Returns a shallow copy of a portion of array into a new array, selected from start to end(end not included))
let fruits2=["Apple","Orange","Mango"]
let citrus=fruits2.slice(1,2)
console.log(citrus)

let fruits3=["TestF","TestR","TestU"]
let moreFruits=fruits2.concat(fruits3);
console.log(moreFruits)

let index1=moreFruits.indexOf("TestR")
console.log(index1)

let hasincludeFruits=moreFruits.includes("TestF")
console.log(hasincludeFruits)

let fruitsconcatAndSort=fruits2.concat(fruits3)
console.log(fruitsconcatAndSort)
let sortFruits=fruitsconcatAndSort.sort();
console.log(sortFruits)

