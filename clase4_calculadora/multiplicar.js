function multiplicar(numeroA, numeroB) {
    if (isNaN(numeroA) || isNaN(numeroB)) {
        return 'Debe enviar 2 numeros'
    }
    let resultado = numeroA * numeroB;
    return "El resultado de la multiplicacion es: " + resultado;
}
​
module.exports = multiplicar;