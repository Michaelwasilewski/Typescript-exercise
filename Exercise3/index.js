"use strict";
let person = {
    name: "Michael",
    age: 29,
    hasPets: true,
};
function Greet(name) {
    return "Hello, " + name + "!";
}
function getAgeInFiveYears(age) {
    return age + 5;
}
function displayCarInfo(car) {
    return `The car is a ${car.year} ${car.make} ${car.model}`;
}
class Rectangle {
    // Constructor
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Method
    area() {
        return this.width * this.height;
    }
}
function doubleIt(input) {
    if (typeof input === "string") {
        return input + input;
    }
    return input * 2;
}
console.log(doubleIt("abs"));
console.log(doubleIt(4));
