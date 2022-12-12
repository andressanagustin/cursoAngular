/*
    ===== Código de TypeScript =====
*/

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
    cancion: 'ness',
    detalles: {
        autor: 'ed sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles:{ autor } } = reproductor;
// const { autor } = detalles

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El cancion actual de: ', cancion);
console.log('El autor de: ', autor);

const dbz: string[] = ['Goku', 'Vegueta', 'Trunks'];
const [ ,,p3 ] = dbz;

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);