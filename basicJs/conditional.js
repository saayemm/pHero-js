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
let marks = 58;

if(marks>=90){
    console.log("A");
}else if(marks>=80 && marks <=90){
    console.log("B");
}else if(marks>=70  && marks<=80){
    console.log("C");
}else if(marks>=60 && marks<= 70){
    console.log("D");
}else if(marks<=60){
    console.log("F");
}
