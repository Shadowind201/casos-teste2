function somar(a, b){
    if((typeof a != 'number') || (typeof b != 'number')){
        return"Caracter inválido"
    }
    return a + b
}

module.exports = somar