var arr = [1,2].concat([3,4]);
console.log(arr);

arr = [...[1,2], ...[3,4]];
console.log(arr);

var arr1 = [1,4];
var arr2 = [2,3];

arr.splice(1 , 0, arr2);

console.log(arr1);

arr1 = [1,4];
arr2 = [2,3];

arr1.splice(1, 0, ...arr2);
console.log(arr1);
