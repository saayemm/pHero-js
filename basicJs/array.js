const number = [12, 23, 34, 45, 56, 67, 78, 89, 90, 100, 155, 166, 177, 188, 199, 200];
// console.log(number.length);

// Index
// console.log(number[5]);

const third = number[3];
// console.log(third);

number[0] = 1000;
// console.log(number);

const newNumber = [12, 23, 34, 45, 56, 67, 78, 89, 90, 100, 155, 166, 177, 188, 199, 200];
// console.log(newNumber);
newNumber.push(250);
// console.log(newNumber);

const friends = ['Alu', 'Bulu', 'culu', 'dulu', 'fulu'];
friends.push('gulu');

// // push method = push add data in the last index
// // pop method = pop cut out the data from the last index
// // shift method = shift cut out the data from the first index
// // unshift method = unshift add data in the first index
friends.pop();
// console.log(friends);

console.log(friends.includes('him'));

if(friends.includes('prithy')){
    console.log('go f');
}else{
    console.log('go away');
}

console.log(friends.indexOf('culu'));
console.log(Array.isArray(friends));    


// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
console.log(fruits[2]);
let replace = fruits.splice(fruits.indexOf('orange'), 1, 'jambura');
console.log(fruits);


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const tourist = ['coxsbazar', 'sajek', 'sundarban'];
tourist.push('tetulia')
console.log(tourist);
tourist.push('mathafa','kalaramjot')
console.log(tourist);
tourist.pop();
console.log(tourist);


// Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

const books = ['math', 'english', 'bangla', 'javascript', 'physics'];
if(books.includes('papakipori')){
    console.log("faltu boi");
    
}else{
    console.log("valo boi");
    
}


// Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

const array = ['math', 'english', 'bangla', 'javascript', 'physics'];
console.log(Array.isArray(array));


// Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const array1 = ['math', 'english', 'bangla', 'javascript', 'physics'];
const array2 = ['math', 'english', 'bangla', 'javascript', 'physics'];

const array3 = array1.concat(array2)
console.log(array1);
console.log(array2);
console.log(array3);