const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true,
    varient: {
        name: 'cool',
        made: 'china'
    }
}
// console.log(bottle.varient.made);

// object loop

const mobile = {
    color: 'black',
    price: 19000,
    made: 'china',
    isCharged: true
}
// for (const prop in mobile) {
//     console.log(prop,mobile[prop]);
// }
const key = Object.keys(mobile);
const value = Object.values(mobile);
// console.log(value);

// console.log(key);

// Object Practice
// Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors["golden rod"]);

// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.capacity = 5;
// console.log(car);

// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// console.log(student.physics.marks);

// Count the number of properties.

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const count = Object.keys(student1).length;
// console.log(count);

// Loop through an object and print the key-value pairs with their types
// Input:

const myObject = {
    name: 'John Doe',
    age: 25,
    city: 'New York',
    isStudent: false
}

// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

for (const prop in myObject) {
    console.log(`key: ${prop} | type: ${typeof myObject[prop]}`);
}





