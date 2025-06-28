/*


A constructor function is used to create and initialize objects. In JavaScript, when you want to create multiple objects of the same type, a constructor function allows you to define a "blueprint" for that object.
Key Concepts:


Constructors are invoked with the new keyword.
The this keyword refers to the new object created.
Constructor functions enable us to assign properties and methods to objects.


*/







function Person(name, age) {
    this.name = name;  // 'this' refers to the new object created
    this.age = age;
  }
  
  // Creating objects using the constructor function
  const person1 = new Person('John', 30);
  const person2 = new Person('Jane', 25);
  
  console.log(person1.name); // Outputs: John
  console.log(person2.age);  // Outputs: 25