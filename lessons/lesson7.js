//Loops

//For Loops

for(let i=0;i<5;i++){
    console.log("Hello World! "+i)
}

var cars=["Volvo","Toyota", "Nissan"]

for (let car of cars){
    console.log(car)

    if(car=='Toyota'){
        break
    }
}

cars.forEach (car =>{
    console.log(car)
})