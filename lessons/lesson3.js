//Objects

var customer={
    firstName:'John',
    lastName:'Smith',
    cars:["Volvo","Toyota", "Nissan"]
}

console.log(customer)

//Dot Notataion
customer.firstName='Mike'
//Bracket Notation
customer['lastName']='Test'

console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays

var car=["Volvo","Toyota", "Nissan"]
car[1]="Jeep"
console.log(car[1])     
console.log(customer.cars[1])
