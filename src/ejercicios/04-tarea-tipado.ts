/*
======= Codigo de TypScript =======
*/

interface SuperHeroe {
    nombre    : string;
    edad      : number;
    direccion : Direccion
    mostrarDireccion : () => string
    
}

interface Direccion {
    calle           : string;
    pais            : string;
    cuidad          : string;
}

    
    
    
const superHeroe : SuperHeroe = {
    nombre : 'spiderman',
    edad : 30,
    direccion : {
        calle: 'Main St',
        pais: 'USA',
        cuidad: 'NY',
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.calle 
        + ', ' + this.direccion.cuidad + ', ' + this.direccion.pais 
    }
    
    
    
}
const res = superHeroe;
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
console.log(res);