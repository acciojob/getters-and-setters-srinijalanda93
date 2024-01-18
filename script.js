class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        console.log(`The name is ${this.name}`);
    }

    set setage(newage) {
		 
        console.log(`The age is ${newage}`);
		this.age = newage;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
const person = new Person("John", 25);
person.setage = 30; // Set age using the setter
console.log(person.age); // Check if the age is updated

