import { Producto, calculaISV } from './06-DesestructuracionDeArgumentos';


const carritoCompras : Producto[] = [
    {
        desc: 'Telefono',
        precio: 300
        
    },
    {
        desc: 'Tablet',
        precio: 550
    },
]


const [total,isv] = calculaISV(carritoCompras)

console.log('total',total);
console.log('ISV',isv);