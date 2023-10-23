var n = new Date()
var hora = n.getHours() // DA A HORA DO SISTEMA
var minutos = n.getMinutes() // DA OS MINUTOS DO SISTEMA
console.log(`Agora são ${hora} horas e ${minutos} minutos`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12) {
    console.log('Boa tarde!')
} else if (hora >= 18) {
    console.log('Boa noite!')
}