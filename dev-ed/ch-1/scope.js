// GLOBAL SCOPE
let food = "apple";
let fruits = 5;

//FUNCITON SCOPE

function store() {
  console.log(food);
}

//BLOCK SCOPE
if (true) {
  console.log(food);
}

//GLOBAL VARIABLES can be used in global scope, function scope and block
//Function variables and block scope can be only used in their own scope
//IMPORTANT WE can have varibales inside a function and also an if statement
//We can pass the varibales down the if statement
