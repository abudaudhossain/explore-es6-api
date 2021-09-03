const bank = (owner) => {
    let balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdrow: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const myBank = bank("AbuDau");
const minorBank = bank('minor');
console.log(minorBank.deposit(200));
console.log(minorBank.deposit(200));
console.log(minorBank.deposit(200));
console.log(minorBank.withdrow(300));

console.log(myBank.deposit(200));
console.log(myBank.deposit(300));
console.log(myBank.deposit(300));
console.log(myBank.withdrow(200));

