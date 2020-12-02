/* buscarAuto: function (patenteClave) {
        let encotro = concesionaria.autos.filter(elemento => elemento.patente == patenteClave );
        //provar con find
        if (encotro.length != 0){
            return encotro;
        }
        else
            return null;

    },*/


        /*

   for ( let auto of autos) {
          if(auto.patente == patenteClave){
            return(auto)
         
             }
             else
             return null

        }

    */

/*
let autos = require('./autos');

const concesionaria = {
    autos: autos,

    buscarAuto: function (patenteClave) {
        for ( let auto of autos) {
          if(auto.patente == patenteClave)
           { return(auto) }
            else if(auto.length == 0)
             {return null}
        }
    },
    venderAuto : function ( patenteClave) 
    {      
        let unAuto = concesionaria.buscarAuto(patenteClave);
        unAuto.vendido = true       
    },

    autosParaLaVenta: function (){
        let paraVenta = autos.filter(elemento => elemento.vendido == false)
        return (paraVenta);
     }, 

     autos0KM: function(){
        let cero = this.autosParaLaVenta();
       let ceroVenta = cero.filter(elemento => elemento.km <= 100)
       return (ceroVenta);

     },

}
*/
let autos = require('./autos');
let personas = require('./personas');

let concesionaria = {
   autos: autos,
 
     buscarAuto: function (patente) {
      return this.autos.find(auto => auto.patente== patente)||null
        
     },

venderAuto : function ( patenteClave) {
    const existente = this.buscarAuto(patenteClave);
    if(existente){
        existente.vendido = true;
        const index = autos.findIndex((a)=> a.patente == patenteClave);
        autos[index] = existente;
    }
    },

   autosParaLaVenta: function (){
        let paraVenta = autos.filter(elemento => elemento.vendido == false)
        return (paraVenta);
     },

    autos0KM: function(){
      let cero= this.autosParaLaVenta();
      
       let ceroVenta = cero.filter(elemento => elemento.km <= 100);
       return ceroVenta;
     },
     listaDeVentas: function(){
        
        let listaVendidos = autos.filter(elemento => elemento.vendido == true);
        let totalVentas = listaVendidos.map(elemento => elemento.precio );
        return totalVentas
     },
     totalDeVentas: function(){
        let autosVendidos = this.listaDeVentas();
         return autosVendidos.reduce((acumulador,numero) =>{ return acumulador + numero}, 0);
     },

     puedeComprar: function(unAuto,unaPersona){
        
        return(unAuto.precio <= unaPersona.capacidadDePagoTotal && (unAuto.precio/unAuto.cuotas)<= unaPersona.capacidadDePagoEnCuotas)
     
     },
     autosQuePuedeComprar: function(unaPersona){
        let listaAutos = this.autosParaLaVenta();
        let cont = listaAutos.length;
        

        for(let i = 0; i < cont ;i++)
        {   
            if(this.puedeComprar(listaAutos[i],unaPersona)){
                //console.log('cont')
          listaAutos.push(listaAutos[i]);
         
            }
        }
        return listaAutos;
    },

}
concesionaria.venderAuto('APL123');
concesionaria.venderAuto('JJK116');
//let unauto = concesionaria.buscarAuto("APL123");
let juani = personas[0]
//console.log(unauto);
//let alaventa = autosParaLaVenta();
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autos0KM())
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.puedeComprar(autos,personas));

//console.log (concesionaria.puedeComprar(unauto,juani));
console.log (concesionaria.autosQuePuedeComprar(juani));

//concesionaria.venderAuto("APL123");
//console.log(concesionaria.autos[1].patente)///muestra la patente
