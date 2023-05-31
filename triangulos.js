  const verificando = (a, b, c) => {
    let lado1 = Math.abs(a)
    let lado2 = Math.abs(b)
    let lado3 = Math.abs(c)

        if((lado1 + lado2 > lado3) && (lado1+lado3 > lado2) && (lado2+lado3 > lado1)){
            if(lado1 == lado2 && lado2 == lado3){
                return "Triângulo equlátero."
            }
            else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
                return "Triângulo Isósceles."
            }
            else{
                return "Triângulo escaleno." }
        } else{
            return "Isso não é um triângulo."
        }
    }
    module.exports = {
        verificando
    }