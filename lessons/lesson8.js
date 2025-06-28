//Declarative Function

function HelloOne(){
    console.log("Hello One")
}
HelloOne() //mention anywhere in the page

//Anoymus FUnction
var helloTwo=function(){
    console.log('Hello Two')
}
helloTwo() //Only need to mention after the function

//ES6 Function syntax or arrow function

var helloThree = () => {
    console.log('Hello Three')
}
helloThree()


//function With Arguments

function PrintName(name,lastName){
    console.log(name +' '+lastName)
}

PrintName('Jithin','Mathew')


//function with return
function multiplyByTwo(number){
    var res=number*2
    return res

}
var result=multiplyByTwo(5)
console.log(result)

//import function
import { printAge } from "./helper/printHelper.js"
printAge(6)

/*
//import Everything

import * as helper from '../helpers/printHelper.js'
helper.printAge(10)

*/