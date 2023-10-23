var idade = 66
console.log(`Sua idade é ${idade} anos` )
if (idade < 16) {
    console.log("Você não pode votar ainda")
} else if (idade < 18 || idade > 65) {
    console.log('Você pode votar opcionalmente')
} else if (idade > 18) {
    console.log('Seu voto é obrigatório')
}