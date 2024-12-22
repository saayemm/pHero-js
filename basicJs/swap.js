let a = 5;
let b = 3;
// console.log(a, b);

const temp = a;
a = b;
b = temp;
// console.log(a, b);

let x = 5;
let y = 3;
console.log(x, y); 
[x, y] = [y, x];    
console.log(x, y);