// require do arquivo
const { default: expect } = require("expect")
const ValidarEmail = require("./email")

// criar o caso de teste
test('Validação de emails', ()=>{
    expect("João").toBe(true)
})