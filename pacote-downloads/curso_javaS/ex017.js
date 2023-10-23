/*let num = [5, 2, 6, 9, 4]

num.push(22)
console.log(num)
console.log(num.length)
console.log(num.sor())*/

let valores = [10, 7, 2, 24, 32, 41]

/*for (var val = 0; val < valores.length; val++) {
    console.log(`A posição ${val}, tem o valor ${valores[val]}`) // USANDO O FOR PARA IMPRIMIR OS VALORES DENTRO DO ELEMENTO 
}*/

for (let val in valores) {
    console.log(`A posição ${val}, tem o valor ${valores[val]}`) // FORMA MAIS OTIMIZADA  
}
