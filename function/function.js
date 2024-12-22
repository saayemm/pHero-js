const number = [1, 2, 3];

function sumOfNumber(number){
    let sum = 0;
    for(let i=0; i<number.length; i++){
        sum += number[i]
    }
    return sum;
}
const sum = sumOfNumber(number);
// console.log(sum);


// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d){
    return a*b*c*d;
}
const result = multiply(2, 3, 4, 5);
// console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.

function oddEvenResult(number){
    if(number%2===1){
       let result = number*2
        return result;
    }else{
      let  result = number/2
        return result
    }
}
const res = oddEvenResult(8)
// console.log(res);



// Task-3
// Write a function called make_avg() which will take an array of integers and 
// the size of that array and return the average of those values.

const someNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function make_avg(someNum){
    let sum = 0;
    for(num of someNum){
        sum += num;
    }  return sum/someNum.length;
}
const avg = make_avg(someNum);
// console.log(avg);

// Task-4
// Write a function called count_zero() which will take a binary string
//  (Binary string is a string which is consist of only 0 and 1)
//  as parameter and count how many 0’s are there in that string.

const binaryString = ''
function count_zero(binaryString){
    let count = 0;
    for(let i=0; i<binaryString.length; i++){
        if(binaryString[i]==='0'){
            count++
        }
    } return count;
}
const zeroCount = count_zero('0990487009')
// console.log(zeroCount);

// Task-5
// Write a function called odd_even() which takes an integer value and tells 
// whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(value){
    if(value%2===0){
        return 'Even'
    }else{
        return 'Odd'
    }
}
const oddEven = odd_even(9);
// console.log(oddEven);
