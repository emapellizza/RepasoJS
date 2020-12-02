function restar(n1, n2) {
    if(isNaN(n1) || isNaN(n2)) {
        return console.log('Debe enviar 2 numeros')
    }
    let resultado = n1 - n2;
    return resultado;
}
​
module.exports = restar;