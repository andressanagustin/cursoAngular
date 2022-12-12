let habilidades: string[] = ['Bash','Counter','Healing'];
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
};

personaje.puebloNatal = 'Santa Fe';

// console.log(personaje);
console.table(personaje);