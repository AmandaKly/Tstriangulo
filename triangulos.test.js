const {verificando} = require("./triangulos")

test('Esta operação me retornará,',() =>{
    expect(verificando(2,2,3)).toEqual("Triângulo Isósceles.")
})

test('Esta operação me retornará,',() =>{
    expect(verificando(1,2,3)).toEqual("Isso não é um triângulo.")
})

test('Esta operação me retornará,',() =>{
    expect(verificando(2,1,3)).toEqual("Isso não é um triângulo.")
})


test('Esta operação me retornará,',() =>{
    expect(verificando(2,2,2)).toEqual("Triângulo equlátero.")
})

test('Esta operação me retornará,',() =>{
    expect(verificando(5,7,3)).toEqual("Triângulo escaleno.")
})

test('Esta operação me retornará,',() =>{
    expect(verificando(7,-5,3)).toEqual("Triângulo escaleno.")
})

