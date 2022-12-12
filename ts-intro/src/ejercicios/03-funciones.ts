/*
    ===== Código de TypeScript =====
*/

function sumar(a:number,b:number):number{
    return a + b;
}

const sumarFlecha = (a:number,b:number):number => {
    return a+b;
}

function multiplicar (numero: number,otroNumero?: number,base: number = 2): number{
    return numero * base;
}


// const result = multiplicar(5,0,10);
//
// console.log(result);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp:()=>void;
}

function curar(personaje:PersonajeLOR,curar:number): void{

    personaje.pv += curar;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv:50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);
    }
}

curar (nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();