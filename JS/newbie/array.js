const arr = [];

console.log(arr.__proto__);

arr.push(10,20);

console.log(arr);
console.log([].__proto__);

console.log(arr.hasOwnProperty(0));
console.log(arr instanceof Object);
