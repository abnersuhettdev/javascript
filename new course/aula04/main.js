const numbers = [1,2,3,4,5]

const numbersmutipliedby2 = numbers.map(function(number){
    return number * 2
})

const ages = [8,19,27,30,22,40]

/*const evenAges = ages.filter(function(item){
    return item %2 === 0
    console.log(evenAges)
})*/

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age
},0)

console.log(sumOfAges)