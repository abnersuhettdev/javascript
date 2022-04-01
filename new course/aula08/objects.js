class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
        
    }
    speak(){
        console.log("Hello World!")
    }
}

const person = new Person('Jane', 'Doe', 40)
console.log(person)
person.getFullName()
person.speak()
