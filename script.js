class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get getName() {
        console.log(`The name is ${this._name}`);
    }

    set setage(age) {
     //   console.log(`The age is ${newage}`);
		this._age = age;
    }
	get getAge(){
		 console.log(`The name is ${this._age}`);
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


