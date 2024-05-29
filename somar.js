function somar(a, b){
    a = parseFloat(a)
    b = parseFloat(b)
    if((isFinite (a) != 'number') || (isFinite (b) != 'number')){
        return"Caracter inválido"
    }
    return a + b
}

module.exports = somar