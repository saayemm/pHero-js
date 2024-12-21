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

// push method = push add data in the last index
// pop method = pop cut out the data from the last index
// shift method = shift cut out the data from the first index
// unshift method = unshift add data in the first index
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


