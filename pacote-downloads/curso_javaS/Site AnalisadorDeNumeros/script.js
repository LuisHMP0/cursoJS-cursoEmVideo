let num = document.getElementById('numb0')
let lista = document.getElementById('elementos')
let res = document.getElementById('res')
let valores = []

// A FUNÇÃO isNumero E inLista SERVEM PARA A FUNÇÃO ADICIONAR (ONDE ELAS SÃO CHAMADAS)
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    } 
}

function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {// TESTANDO SE É UM NUMERO E SE ESTA NA LISTA 
        valores.push(Number(num.value)) // adicionando os numeros(input) na lista 
        let item = document.createElement('option') // criando um elemento option chamado item 
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // PARA APAGAR O NUMERO COLOCADO ANTES
    num.focus() // PARA DAR O FOCO NO INPUT
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Coloque um valor antes de finalizar!')
    } else {
        let comprimento = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 

        for (let pos in valores) {
            soma += valores[pos]
            media = (soma/comprimento)
            if (pos > maior) {
                maior = valores[pos]
            }
            if (pos < menor) {
                menor = valores[pos]
            }
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo tem ${comprimento} número(s) sendo analisados.</p>`
        res.innerHTML += `<p> O maior número analisado é ${maior}.</p>`
        res.innerHTML += `<p> O menor número analisado é ${menor}.</p>`
        res.innerHTML += `<p> A soma de todos os valores analisados é ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores analisados é ${media}.`

    }
}

