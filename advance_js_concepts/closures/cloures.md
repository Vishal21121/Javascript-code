# Closures

Closures are created when the function is defined and it allows the nested child function to access the parent's variables even the parent function has finished it's execution.

### Example of closure:

```js
// global scope
let x = 1;
const parentFunction = () => {
  let myValue = 2;
  // child function can access the variables of the parent scope
  console.log(x);
  console.log(myValue);

  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };

  return childFunction;
};

const parentResult = parentFunction();
parentResult(); // we are able to access the parent Variables even though parent function has finished executing.
parentResult();
parentResult();
console.log(x); // we will not get 1 as we are able to access the global variable and we are changing it's value within childFunction
```

- Example of closure using IIFE

```js
const privateCounter = (() => {
  let count = 0;
  console.log(`Initial value: ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();
console.log(privateCounter);
privateCounter();
privateCounter();
privateCounter();
```

- Example of closure using IIFE with arguments

```js
const withdrawMoney = ((money) => {
  let amount = money;
  console.log(`Initial amount: ${amount}`);
  return () => {
    amount -= 1000;
    if (amount > 0) {
      console.log(`Money withdrawn 1000, money left ${amount}`);
    }
    if (amount <= 0) {
      console.log("can't withdraw money");
    }
  };
})(3000);

withdrawMoney();
withdrawMoney();
withdrawMoney();
```

- Real-life example

let' say we want to change the background color of the web page based on the button clicked.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <button id="orange">orange</button>
    <button id="red">red</button>
    <button id="green">green</button>
    <script>
      function clickHandler(color) {
        return () => {
          document.body.style.backgroundColor = color;
        };
      }
      document.getElementById("orange").onclick = clickHandler("orange");
      document.getElementById("green").onclick = clickHandler("green");
      document.getElementById("red").onclick = clickHandler("red");
    </script>
  </body>
</html>
```
