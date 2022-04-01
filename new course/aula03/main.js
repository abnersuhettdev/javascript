const names = [ 'Felipe', 'João', 'Júlia']

names.push('Gabriel') // adiciona no final da lista

console.log(names)

names.unshift(20) // adiciona no inicio da lista

console.log(names)

names.pop()
names.pop()

names[3] = 'Abner'
console.log(names.indexOf('Felipe'))
console.log(names.length)
const namesIsArray = Array.isArray(names)
console.log(namesIsArray)

const sortedNames = names.sort()
console.log(sortedNames)
