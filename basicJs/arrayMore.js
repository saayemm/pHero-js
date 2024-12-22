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
console.log(reverseNum);
