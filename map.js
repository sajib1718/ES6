number = [1, 2, 3, 4, 5];

const doubleIt = num => num * 2;
const makeDouble = number.map(doubleIt);


const numbers = [4, 5, 8, 12];
const third = numbers.map(n => n * 3);


const friends = ['sajib', 'mahmudul', 'rasel', 'sakibul'];
const firstLetter = friends.map(n => n[0]);

const length = friends.map(n => n.length);


const products = [
    { name: 'sajib', id: 01, salary: 20000 },
    { name: 'sakibul', id: 02, salary: 10000 },
    { name: 'rasel', id: 03, salary: 30000 },
    { name: 'mahmudul', id: 05, salary: 25000 },

]

const item = products.map(a => a.name);
const itemPrice = products.map(a => a.salary);

console.log(itemPrice);






