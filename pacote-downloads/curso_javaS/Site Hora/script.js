function carregar() {
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var img = document.createElement('img') 
    img.setAttribute('id', 'foto')
      
    if (hora >= 5 && hora < 12) {
        // bom dia 
        img.setAttribute('src', 'manha.jpg')
        document.body.style.background = '#f38d00'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.setAttribute('src', 'tarde.jpg')
        document.body.style.background = '3e80bc'
    } else if (hora >= 18) {
        //boa noite
        img.setAttribute('src', 'noite.jpg')
        document.body.style.background = '#081d20'
    } else {
        // madrugada
        img.setAttribute('src', 'madrugada.jpg')
        document.body.style.background = '#6c5464'
    }
    
    msg.innerHTML = (`Now are ${hora} hours and ${minutos} minutes`)
    msg.appendChild(img)
}
