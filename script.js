class Person {
	constructor(name,age){
        name=this.name
        age=this.age
    }
    get getName(){
        console.log(`the name is ${this.name}`)
    }
    set setName(newName){
        console.log(`the name is ${newName.toLowerCase}`)
    }
}

class Student extends Person {
    constructor(name,age){
        super(name,age)

    }
    study(){
       // that logs <name> is studying to the console.
       console.log(`${this.name} is studying`)
    }
}

class Teacher extends Person {
    teach(){
        console.log(`${this.name} is studying`)
    }
}