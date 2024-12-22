
function inToFt(inches){
    const feetFraction = inches / 12;
    const feet = Math.floor(feetFraction);
    const inche = inches%12
    const height = `${feet} feet ${inche} inches`;
    return height;
}
const sam = inToFt(70)
// console.log(sam) // 14 feet 4 inches;


const friends = ["Sam", "John", "Peter", "Chris", "Mary"];
const numbers = [70, 60, 60, 60, 72, 75, 68, 68,72];

function noDuplicate(arr){
    let unique = [];
    for(num of arr){
        if(unique.includes(num)===false){
            unique.push(num);
        }
    }return unique;
}
const uniqueNumbers = noDuplicate(numbers);
console.log(uniqueNumbers) // [70, 60, 72, 75, 68];
