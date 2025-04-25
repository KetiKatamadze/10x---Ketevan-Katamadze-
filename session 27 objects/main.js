// 1. Car Showroom Database 
console.log("1. Car Showroom Database")

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    getInfo: function() {
        return `${this.brand} ${this.model}, ${this.year}`;
    },
};

console.log(car.getInfo())

car.model = "Avalon"
delete car.year
console.log(car);

// 2. Virtual Assistant – Meet the User!
console.log("2. Virtual Assistant – Meet the User!")

const person = {
    name: "Kata",
    age: 27,
    greet: function (){
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    },
}

console.log(person.greet())

// 3. Student Dashboard 
console.log("3. Student Dashboard ")

const student = {
    name: "Kata",
    age: 27, 
    grades: [99, 99, 99]
}

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

// 4. The Online Bookstore
console.log("4. The Online Bookstore")

function book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new book("Intermezzo", "Sally Rooney", 2024)

console.log(book1)

//5. Virtual Pet Adoption Center
console.log("5. Virtual Pet Adoption Center")

class animal {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("Animal Sound")
    }
}

const pet = new animal("Nebi", "Dog");
console.log(pet);
pet.makeSound()

// 6. Secure Banking System 
console.log("6. Secure Banking System ")

// class bankAccount{
//     constructor(balance){
//         this.balance = balance
//     }
//     deposit(amount){

//     }
//     withdraw(amount){

//     }
//     getBalance() {

//     }
// }

// 7. Employee Management System
console.log("7. Employee Management System")

class Employee{
    constructor(name, salary){
        this.name = name; 
        this.salary = salary;
    }
    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}`
    }
}

class department extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department
    }
    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
    }
}

const emp = new Employee("Kata", 10000);
console.log(emp)

const manager = new department("Anya", 15000, "Manager")
console.log(manager)

// 8. Vintage Car Age Calculator 
console.log("8. Vintage Car Age Calculator ")

let currentYear = 2025
class Car{
    constructor(brand, year){
        this.brand = brand; 
        this.year = year; 
    }
    age(){
        return `Current Year is: ${currentYear}, 
Your car's year is: ${this.year},
Your car's age is: ${currentYear - this.year}`
    }
}

const myCar = new Car("Chevrolete", 2013)
console.log(myCar.age())

