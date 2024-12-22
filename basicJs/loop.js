// const number = [12, 23, 34, 45, 56, 67, 78, 89, 90, 100, 155, 166, 177, 188, 199, 200];
// for(const num of number){
//     console.log(num);
//     console.log("this is a number");
    
// }

// const num = 7;
// if(num<5){
//     console.log("choto number");
    
// }else{
//     console.log("eber thik ase");
    
// }

// let num1 = 0;
// let sum = 0;

// while(num1<=10){
//     // console.log(num1);
//     num1++
//     sum = sum+num1;
//     console.log(sum);
    
    
// }

/***

Subtask-1:
Find all the odd numbers from 61 to 100.
 */

/***
Subtask-2:
Find all the even numbers from 78 to 98.

 */

let num = 61;

while(num<=100){
    if(num%2===1){
        // console.log("odd n", num);
        
    }
   num++
}

let num1 = 78;

while(num1<=98){
    if(num1%2===0){
        // console.log("this is a even no", num);
        
    }
    num1++
}

/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */

let num2 = 81;
let sum = 0;
while (num2<=131){
    if(num2%2===1){
        sum = sum+num2
        // console.log("sum of odd", sum);
        
    }
    num2++
}

// Subtask-2:
// Display sum of all the even numbers from 206 to 311.
// 


let num4 = 206;
let sum2 = 0;

while(num4<=311){
    if(num4%2===0){
        sum2= sum2+num4;
        console.log("sum of even", sum2);
    }
    num4++
}