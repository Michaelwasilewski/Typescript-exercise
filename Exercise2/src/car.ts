export class Car {
    constructor(public brand: string, public model: string) {}
    getDescription(): string {
        return `${this.brand} ${this.model}`;
    }
}