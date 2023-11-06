console.log(a)

// var is hoisted means we can access it before the initialization
// but its value will be undefined as it's not assigned any value.
var a = 10

// let and const are not hoisted, means we can't access them above
// let a = 10
// const a = 10

// we can access greet over here as it is hoisted.
// greet()
// hello()

// here the function is declared hence it's also hoisted.
function greet() {
    console.log("hello world")
}

// Here we are initialising hello with an anonymous function meaning without 
// function keyword hence it's also not hoisted.
// In short: the arrow function is not hoisted.
const hello = () => {
    console.log("hello world")
}