// /***

// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk
// */

// let burgerPrice = 600;

// if(burgerPrice > 500){
//     console.log('Oyee! you have a free coke');
// }else{
//     console.log('you have to buy a coke with 30tk');
// }


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. 
Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let weight = 70;
// let height = 1.7;

// let bmi = weight / (height * height);

// if(bmi < 18.5){
//     console.log('You are underweight');
//     }else if(bmi >= 18.5 && bmi <= 24.9){
//     console.log('You are normal');
//     }else if(bmi >= 25 && bmi <= 29.9){
//     console.log('You are overweight');
//     }else{
//         console.log("You are obese");}
        

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade 
based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// let marks = 58;

// if(marks>=90){
//     console.log("A");
// }else if(marks>=80 && marks <=90){
//     console.log("B");
// }else if(marks>=70  && marks<=80){
//     console.log("C");
// }else if(marks>=60 && marks<= 70){
//     console.log("D");
// }else if(marks<=60){
//     console.log("F");
// }

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myScore = 88;
let myFriendScore = 37;

if(myScore>80){
    if(myFriendScore>80){
        console.log("Let's go for a lunch");
    }else if(myFriendScore>60 && myFriendScore<80){
        console.log("Hey bro! good luck next time");
        
    }else if(myFriendScore>=40 && myFriendScore<60){
        console.log("I can't seen your message bro");
        
    }else if(myFriendScore<40){
        console.log("sorry! for block you");
        
    }
}else if(myScore<80){
    console.log("I'm so sad! I have to go home and I have to sleep");
    
}