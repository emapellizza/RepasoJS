let sumar = require('./sumar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');
let restar = require('./restar');

console.log(process.argv);
​
//const operacion = process.argv[2];
​/*
console.log(sumar(1, 2));
console.log(multiplicar(5,6));
console.log(dividir(1,7));
console.log(restar(9,8));*/
​
// En process.argv, tenemos un array con todos los parámetros enviados por consola. Por ejemplo:
// node . sumar 1 2
// Devolverá un array con [rutaNode, rutaArchivo.js, 'sumar', '1', '2']
// Sería deseable poder obtener estos parámetros y armar una lógica para calular en base a lo que escribe el usuario.
//console.log(process.argv);