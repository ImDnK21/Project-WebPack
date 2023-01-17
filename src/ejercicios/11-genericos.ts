function queTipoSoy(argumento) {
    return argumento
}

function queTipoSoy2<T>(argumento:T) {
    return argumento
}

let soyString = queTipoSoy('Soy un string')
let soyNumero = queTipoSoy(23)
let isBoolean = queTipoSoy(true)
let soyUnArreglo = queTipoSoy([1,2,3,4])

let soyString2 = queTipoSoy2('Soy una cadena de texto')
let soyNumero2 = queTipoSoy2(42)
let isBoolean2 = queTipoSoy2(true)
let soyUnArreglo2 = queTipoSoy2([1,2,3,4,'sadad',true])


//. Al Asignar el tipo genero en la funcion como <T> 
//. puedo asignar un tipo de argumento luego de llamar la funcion
//. Como en el siguiente ejemplo: 
let SoyExplicito = queTipoSoy2<boolean>(true)


console.log(soyString);
console.log(isBoolean);
console.log(soyNumero);
console.log(soyUnArreglo);

console.log(soyString2);
console.log(SoyExplicito);