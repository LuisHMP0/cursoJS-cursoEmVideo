function Contar() {
    var inicio = document.getElementById('numb0')
    var fim = document.getElementById('numb1')
    var passo = document.getElementById('numb2')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Preencha as lacunas com algum número!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) //PARA REPETIR USE +=
        res.innerHTML += `${c} ` //PARA REPETIR USE +=
    }
}