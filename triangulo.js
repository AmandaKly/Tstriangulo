try{
let lado1 = Math.abs(12)
let lado2 = Math.abs(15)
let lado3 = Math.abs(10)
if((lado1 + lado2 > lado3) && (lado1+lado3 > lado2) && (lado2+lado3 > lado1)){
    if(lado1 == lado2 && lado2 == lado3){
        console.log("Esse triângulo é equlátero.")
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Esse triângulo é Isósceles.")
    }
    else{
        console.log("Esse triângulo é escaleno.")
    }
} else{
    console.log("Isso não é um triângulo.")
}
} catch(e){
    if(e){
        console.log("Você colocou algo que não é um número.")
    }
}
