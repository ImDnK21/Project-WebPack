function sumar(a:number , b:number) : number{
    return a + b;   
}

const sumarFlechas = (a :number,b :number): number => {
    return a + b;
}
//. El los parametros de la funcion, primero deben ir los obligatorios, luego los opciones y 
//. por ultimo lo de valor por defecto

function multiplicar(numero:number, otroNumero? :number , base: number =2 ): number {
    return numero * base
}

interface PersonajeLOR {
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}


function curar(personaje: PersonajeLOR, curarX: number):void {
    personaje.hp += curarX;
    console.log(personaje);
}

const nuevoPersonaje : PersonajeLOR = {
    nombre: 'Strider',
    hp: 50,
    mostrarHp(){
        console.log('Puntos de vida: ',this.hp);
    }
}
curar(nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();



const result = sumar(10,20);
//.                   numbero,otroNumero,base
const result2 = multiplicar(10,20,30)
console.log(result);
console.log(result2);