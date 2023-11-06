// global scope
let x = 1
const parentFunction = () => {
    let myValue = 2;
    // child function can access the variables of the parent scope
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1)
    }

    return childFunction
}

const result = parentFunction()
// console.log(result);
result()    // we are able to access the parent Variables even though parent function has finished executing.
result()
result()
console.log(x); // we will not get 1 as we are able to access the global variable and we are changing it's value within childFunction

