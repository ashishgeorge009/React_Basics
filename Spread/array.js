let arr = [1,2,3]
let arr1 = arr //passes the address of arr
let arr2 =[...arr] //spread operator creates a new array similar to arr and passes the new address to arr2

arr1.push(4);
arr2.push(5);

console.log(arr);
console.log(arr1);
console.log(arr2);
