// practise-1 
nums = [1, 3, 5, 7, 9];
arr = [];
for (num of nums) {
    const a = num + 1;
    arr.push(a);
}
// console.log(arr);


const a = nums.map(n => n + 1);
// console.log(a);

// practise-2 

arr1 = [33, 50, 79, 78, 90, 101, 30];

const a2 = arr1.filter(n => n % 10 == 0);
console.log(a2);

// practise-3 

const a3 = arr1.find(n => n % 10 == 0);
console.log(a3);

