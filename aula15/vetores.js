var num = [5,8,2,9,3]
num.push(6)
num.sort()
for(let pos = 0 ; pos <num.length;pos++){
    console.log(num[pos])
}
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
console.log(`O valor 8 está na posição ${pos}`)
}

