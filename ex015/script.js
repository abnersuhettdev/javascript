function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if( fsex[0].checked){
           genero = 'Homem'
           if( idade >= 0 && idade <10){
            //criança 
            img.setAttribute('src','baby-b.png')
           }else if (idade < 21){
               //jovem
            img.setAttribute('src', 'young-m.png')
           }else if(idade < 50 ){
               //adulto
            img.setAttribute('src', 'adult-m.png')
           }else {
               //idoso
            img.setAttribute('src', 'elder-m.png')
           }
       } else if (fsex[1].checked){
           genero = 'Mulher'
           if( idade >= 0 && idade <10){
            //criança
            img.setAttribute('src', 'baby-g.png')
           }else if (idade < 21){
               //jovem
            img.setAttribute('src', 'young-w.png')
           }else if(idade < 50 ){
               //adulto
            img.setAttribute('src', 'adult-w.png')
           }else {
               //idoso
            img.setAttribute('src', 'elder-w.png')
           }
       }
       res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos.`
       res.appendChild(img)
    }
}