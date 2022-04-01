
function contar(){
  
    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('num2')
    var passo = document.getElementById('nump')
    let res = document.getElementById('res')
   
    if(n1.value.length == 0 || n2.value.length == 0 || passo.value.lenght == 0 ){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)
        if(p <= 0 ){
            window.alert('Passo Inválido!, Considerando PASSE 1 ')
            p= 1
        }
       
        if ( i < f ){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449};`
            }
            
        }else {
            for(let c= i ; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449};`
            }
        }
        res.innerHTML += '\u{1F3c1}'
    }
}