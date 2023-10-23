function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
     

    if (fano.value.length == 0 || fano.value >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'man'
            if (idade <= 5) {
                img.setAttribute('src', 'homem_bebê.jpg')
                //bebe
            } else if (idade > 5 && idade <= 12) {
                img.setAttribute('src', 'homem_criança.jpg')
                //criança
            } else if (idade > 12 && idade < 20) {
                img.setAttribute('src', 'homem_jovem.jpg')
                //jovem 
            } else if (idade > 20 && idade < 60) {
                img.setAttribute('src', 'homem-adulto.jpg')
                //adulto
            } else {
                img.setAttribute('src', 'homem_velho.jpg')
                //idoso 
            }
        } else {
            genero  = 'woman'
        if (idade <= 5) {
            img.setAttribute('src', 'mulher_bebe.jpg')
            //bebe
        } else if (idade > 5 && idade <= 12) {
            img.setAttribute('src', 'mulher_criança.jpg')
            //criança
        } else if (idade > 12 && idade < 20) {
            img.setAttribute('src', 'mulher_jovem.jpg')
            //jovem 
        } else if (idade > 20 && idade < 60) {
            img.setAttribute('src', 'mulher_adulta.jpg')
            //adulto
        } else {
            img.setAttribute('src', 'mulher_velha.jpg')
            //idoso 
        } 
        }
    } res.innerHTML = (`We detect ${genero} with ${idade} years.`)
    res.appendChild(img)
}    