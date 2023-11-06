//  Example of closures using IIFE

// const privateCounter = (() => {
//     let count = 0;
//     console.log(`Initial value: ${count}`);
//     return () => {
//         count += 1
//         console.log(count);
//     }
// })()

// console.log(privateCounter);
// privateCounter()
// privateCounter()
// privateCounter()


// IIFE with arguments
const withdrawMoney = ((money) => {
    let amount = money
    console.log(`Initial amount: ${amount}`);
    return () => {
        amount -= 1000
        if (amount > 0) {
            console.log(`Money withdrawn 1000, money left ${amount}`);
        }
        if (amount <= 0) {
            console.log("can't withdraw money");
        }
    }
})(3000)

withdrawMoney()
withdrawMoney()
withdrawMoney()