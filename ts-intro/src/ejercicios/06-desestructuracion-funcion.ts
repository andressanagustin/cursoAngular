/*
    ===== Código de TypeScript =====
*/


export interface Producto {
    desc: string;
    precio: number;
}


const telefono: Producto = {
    desc: 'Nokia 1100',
    precio: 100
}

const tableta: Producto = {
    desc: 'Ipad a17',
    precio: 300
}

export function calcularISV(productos: Producto[]):[number,number]{
    let total = 0;

    productos.forEach(({precio})=>{
        total += precio;
    });

    return [total,total * 0.15];
}


// const articulos = [telefono, tableta];
// const [total, isv] = calcularISV(articulos);
//
// console.log('ISV:', isv)
// console.log('Total:', total)