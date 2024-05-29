// require do arquivo
const { default: expect } = require("expect")
const ValidarNome = require("./nome")

// criar o caso de teste
test('Validação de nome com letras', ()=>{
    expect("João").toBe(true)
})