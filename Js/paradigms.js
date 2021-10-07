//Imperative
let arr = [1, 2, 3, 4, 5];
let odds = [];

for (const value of arr) {
    if (value % 2 == 1) {
        odds.push(value);
    }
}

console.log(arr);
console.log(odds);

//Declarative
let arr2 = Array.from({ length: 5 }, (_, i) => i + 1);

let odds2 = arr.filter((value) => value % 2 == 1);

console.log(`arr2 = ${JSON.stringify(arr2)}`);
console.log(`arr3 = ${JSON.stringify(odds2)}`);
