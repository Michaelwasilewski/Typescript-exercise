type Person = {
    name: string;
    age: number;
    hasPets: boolean;
};

let person: Person = {
    name: "Michael",
    age: 29,
    hasPets: true,
}

function Greet (name: string): string {
return "Hello, " + name + "!";
}

function getAgeInFiveYears (age: number):  number {
return age + 5;
}

interface Car {
    make: string,
    model: string,
    year: number,
}

function displayCarInfo(car: Car): string {
return `The car is a ${car.year} ${car.make} ${car.model}`
}

class Rectangle {
    // Properties
    public width: number;
    public height: number;

    // Constructor
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Method
    public area(): number {
        return this.width * this.height;
    }
}


type StringOrNumber = string | number;

function doubleIt(input: StringOrNumber): StringOrNumber {
    if (typeof input === "string") {
        return input + input;
    }
    return input * 2;
}

console.log(doubleIt("abs"));
console.log(doubleIt(4));