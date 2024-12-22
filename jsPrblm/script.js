// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];
let lowest = heights2[0]
function lowestNumber(arr){
    for(low of arr){
        if(low < lowest){
            lowest = low;
        }
    }return lowest;
}

// console.log(lowestNumber(heights2));

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];  
let smallestName = names[0];    
function smallestNameFinder(arr){
    for(name of arr){
        if(name.length < smallestName.length){
            smallestName = name;
        }
    }return smallestName;
}
// console.log(smallestNameFinder(names));

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in 
// the number of laptop, tablets, and mobile and returns the total money required.

const  laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget(laptop, tablet, mobile){
    let total = (laptop * 35000) + (tablet * 15000) + (mobile * 20000);
    return total;
}
// console.log(calculateElectronicsBudget(2, 3, 4));

// Task-4:
// You are given an array of phone objects, each containing information about 
// the model, brand, and price. Your task is to write a JavaScript function 
// named findAveragePhonePrice that takes this array as input and returns 
// the average price of phone.

// Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    function findAveragePhonePrice(arr){
        let sum = 0;
        for(phone of arr){
            sum += phone.price;
        }
        return sum / arr.length;
    }
    // console.log(findAveragePhonePrice(phones));

//     Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly 
// increment with experience then adding the result to the starting salary. 
// Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        function totalSalary(arr){
            let total = 0;
            for(employee of arr){
                total += (employee.experience * employee.increment) + employee.starting;
            }
            return total;
        }
        console.log(totalSalary(employees));