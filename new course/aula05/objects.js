const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: 21,
    hobbies:['Assistir TV', 'Jogar lol', 'Ler'],
    dog: {
        name:'Scooby',
        age: 4,
    } 
}

//const firstName = person.firstName;
//const lastName = person.lastName
//const age = person.age
//const hobbies = person.hobbies

const {
    firstName, 
    lastName, 
    age,
    hobbies,
    dog: {name: dogName},
} = person

const read = person.hobbies[2]

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(read)


console.log(person.dog.age)

