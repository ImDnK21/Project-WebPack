class Heroe {

    alterEgo : string;
    nombre : string;
    edad : number;
    ImprimirNombre(){
        return this.nombre + ', ' + this.alterEgo
    }

    constructor(alterEgo: string, nombre: string , edad: number) {
        this.alterEgo = alterEgo
        this.nombre = nombre
        this.edad = edad
    }

}

const ironMan = new Heroe('IronMan','Tony Stark',42);
console.log(ironMan);