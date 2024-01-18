class Person {
    constructor(name, age) {
        this.Name = name;
        this.Age = age;
    }
get getName(){ return this.Name}

    set setage(age) {
     //   console.log(`The age is ${newage}`);
		this.Age = age;
    }
	
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(`${this.Name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.Name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


