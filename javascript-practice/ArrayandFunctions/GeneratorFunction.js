/*

Generator Function (ES6)
A generator function allows you to pause and resume function execution. It’s denoted with an asterisk (*), and within the function, the yield keyword is used to pause the execution and return values at different stages.
Key Concepts:
A generator function returns an iterator object.
yield is used to pause execution and return intermediate results.
The function can resume from where it left off using .next().

*/

function* generatorFunction() {
    yield 'Hello';
    yield 'World';
    yield '!';
  }
  
  // Using the generator function
  const test = generatorFunction();
  
  console.log(test.next().value); // Outputs: Hello
  console.log(test.next().value); // Outputs: World
  console.log(test.next().value); // Outputs: !