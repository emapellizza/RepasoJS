function dividir(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        return 'Debe enviar 2 numeros'
    }
    if (num2 == 0) {
        return "No se puede dividir por cero";
    }
    return num1 / num2;
}
​
module.exports = dividir;