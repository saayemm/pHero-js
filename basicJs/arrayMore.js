const friends = ['prithy', 'culu', 'him', 'sajib', 'sajal'];
for(const friend of friends){
    // console.log(friend);
}

for(let i = 0; i<friends.length; i++){
    // console.log(friends[i]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i<numbers.length; i++){
    const loop = numbers[i];
    // console.log(loop);
}

// Array reverse
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(num);
// const reverse = num.reverse();
// console.log(num);
const reverseNum = []
for(let i = 0; i<num.length; i++){
    reverseNum.unshift(num[i]);
}
// console.log(reverseNum);

// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']


const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const reverseColors = []
for(let i = 0; i<colors.length; i++){
    reverseColors.unshift(colors[i]);
}
// console.log(reverseColors);


// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

const numbers2 = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = []
for(let i = 0; i<numbers2.length; i++){
    if(numbers2[i] % 2 === 0){
        evenNumbers.push(numbers2[i]);
    }
}
// console.log(evenNumbers);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

const names = ['Tom', 'Tim', 'Tin', 'Tik'];
let nameString = '';
for(const name of names){
    nameString += name;
    // console.log(nameString);
}
// console.log(nameString);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person';
const words = statement.split(' ');
const reverseWords = [];
for(let i = words.length - 1; i>=0; i--){
    reverseWords.push(words[i]);
}
console.log(reverseWords.join(' '));
