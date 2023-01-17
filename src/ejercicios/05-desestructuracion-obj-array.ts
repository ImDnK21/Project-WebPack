interface Reproductor {
volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo,cancion, detalles } = reproductor
const {autor} = detalles

const dbz: string[] = ['Goku','Vegeta','Trunks']
const [ps1,,ps3] = dbz

console.log('Personaje:',ps1);
console.log('Personaje:',dbz[1]);
console.log('Personaje:',ps3);


console.log('El volumen actual es de: ',volumen);
console.log('El segundo actual es de: ',segundo);
console.log('La Cancion actual es: ', cancion);
console.log('El Autor es: ', autor);