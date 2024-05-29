function ValidarNome(nome){
    const r = /^[a-záàâãéèêíïóôõöúçñ ]+$/i
    return r.test(nome)
}

module.exports = ValidarNome