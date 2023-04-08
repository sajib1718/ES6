numbers = [1, 2, 3, 4, 5];
const output = [];
for (number of numbers) {
    const double = number * 2;
    output.push(double);

}

console.log(output);


const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

