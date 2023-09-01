let userName: string = "Mike";
let age: number = 30;
let isStudent: boolean = false;
let something: any ="It can be anything";
let nothing: null = null;
let notKnown: undefined = undefined;

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

class Car {
    constructor (public brand: string, public model: string, public year: number) {}

    getDescription(): string {
        return `${this.brand} ${this.model} ${this.year}`
    }
}

function addItemToArray<T>(arr: T[], item: T):T[] {
    return [...arr, item];
}

addItemToArray<number>([1, 2, 3], 4);
addItemToArray<string>(["a", "b", "c"], "d");
addItemToArray<Person>([], {firstName:"Mike", lastName:"Wasilewski", age: 29});

enum Colors {
    Red,
    Green,
    Blue
}

function getStringOrColor(value: string | Colors): string {
    if (typeof value === "string") {
        return "its a string!";
    } else {
        return Colors[value];
    }
}