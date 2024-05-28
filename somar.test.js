//somar.test.js
const { default: expect } = require("expect")
const somar  = require("./somar")

test('Soma de dois numero inteiros positivos', ()=>{
    expect(somar(3,5)).toBe(8)
})

test('Soma de dois numero inteiros negativos', ()=>{
    expect(somar(-3,-5)).toBe(-8)
})

test('Soma de um número positivo e um número negativo', ()=>{
    expect(somar(7,-2)).toBe(5)
})

test('Soma de zero com outro número', ()=>{
    expect(somar(0,9)).toBe(9)
})

test('Soma de dois números decimais', ()=>{
    expect(somar(2.5,3.1)).toBe(5.6)
})

test('Soma de um número inteiro e um número decimal', ()=>{
    expect(somar(4,2.5)).toBe(6.5)
})

test('Verificação de entrada inválida', ()=>{
    expect(somar("a",3)).toBe("Caracter inválido")
})

test('Soma de grandes números', ()=>{
    expect
})