let vitorias = 50
let derotas = 3

console.log(resultadoJogador(100,6))

function resultadoJogador(vitorias,derotas){
    let saldo = vitorias-derotas
    let retorno 

    
if (saldo <= 10){
    retorno=`O Heroi tem de saldo:  ${saldo} está no nível de Ferro`
}
else if(saldo >= 11 && saldo <= 20) {
    retorno=`O Heroi tem de saldo:  ${saldo} está no nível de Bronze` 
}
else if(saldo >= 21 && saldo <= 50) {
    retorno=`O Heroi tem de saldo:  ${saldo} está no nível de Prata`
}
else if(saldo >= 51 && saldo <= 80) {
    retorno=`O Heroi tem de saldo:  ${saldo} está no nível de Ouro`
}
else if(saldo >= 81 && saldo <= 90) {
    retorno=`O Heroi tem de saldo:  ${saldo} está no nível de Diamante`
}
else if(saldo >= 91 && saldo <= 100) {
    retorno=`O Heroi tem de saldo:  ${saldo} está no nível de Lendário`
}
else if(saldo >= 101) {
    retorno=`O Heroi tem de saldo:  ${saldo} está no nível de Imortal`
}

return retorno
}





