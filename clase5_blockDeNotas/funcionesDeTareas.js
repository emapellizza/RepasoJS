function moduloFuncionDeTareas(){
const fs = require('fs');

const tareas =JSON.parse( fs.readFileSync('./tareas.json'));

//tareas.push({titulo:"pepe2", estado:"completado"});

//fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,2));

const argumento = process.argv[2];

switch (argumento){
    case 'listar':
        console.log (tareas);
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;

    
    default:
        console.log("No entiendo qué quieres hacer");
        break;
};
}

module.exports = moduloFuncionDeTareas();

function escribirJSON(arrayTareas){

    let datoConvertido = JSON.stringify(arrayTareas);

    fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,2));

}