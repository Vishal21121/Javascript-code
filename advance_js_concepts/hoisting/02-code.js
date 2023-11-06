const initApp = () => {
    console.log(hello)
    /*
        below code will be printed for the above line
        () => {
            console.log("hello world")
        }
    */
    hello()
}

// here we will not get initialization error for hello although we are trying to access
// it before initialization in initApp function because while listening to 
// DOMContentLoaded event javascript doesn't call initApp function directly it first 
// initializes all the function inside initApp and then it calls it.
document.addEventListener("DOMContentLoaded", initApp)

// here we are initialising hello with a anonymous function means without
// function keyword hence it's also not hoisted.
// In short: arrow function is not hoisted.
const hello = () => {
    console.log("hello world")
}