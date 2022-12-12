/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal{
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) {
        super(nombreReal,'New York');
    }

}

const ironman = new Heroe('Ironman',45,'Tony Stark');

console.log(ironman);
