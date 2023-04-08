let number = [12, 15, 19, 30, 50, 39];

const num = number.filter(n => n > 20);


const products = [
    { name: 'sajib', id: 01, salary: 20000 },
    { name: 'sakibul', id: 02, salary: 10000 },
    { name: 'rasel', id: 03, salary: 30000 },
    { name: 'mahmudul', id: 05, salary: 25000 },

]

const lessSalary = products.filter(product => product.salary < 30000);


// find 

let nums = [12, 15, 19, 30, 50, 39];
let multiplier = nums.find(g => g % 5 === 0);


let less = products.find(product => product.salary < 40000);
console.log(less);
