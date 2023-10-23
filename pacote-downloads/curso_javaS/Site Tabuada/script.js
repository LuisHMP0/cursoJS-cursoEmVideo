function gerarTabuada() {
    var num = document.getElementById('numb01');
    var tab = document.getElementById('seltab');
    var num2 = document.getElementById('numb02');
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número...')
    } else {
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
    

}