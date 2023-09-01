"use strict";
let userName = "Mike";
let age = 30;
let isStudent = false;
let something = "It can be anything";
let nothing = null;
let notKnown = undefined;
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `${this.brand} ${this.model} ${this.year}`;
    }
}
function addItemToArray(arr, item) {
    return [...arr, item];
}
addItemToArray([1, 2, 3], 4);
addItemToArray(["a", "b", "c"], "d");
addItemToArray([], { firstName: "Mike", lastName: "Wasilewski", age: 29 });
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
function getStringOrColor(value) {
    if (typeof value === "string") {
        return "its a string!";
    }
    else {
        return Colors[value];
    }
}
