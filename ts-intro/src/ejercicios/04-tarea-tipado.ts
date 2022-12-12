/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direction;
    mostrarDireccion: () => string;
}
interface Direction {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre +', '+this.direccion.ciudad+', '+this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);