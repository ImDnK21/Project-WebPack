class SuperHeroe {


    constructor(
        public alterEgo: string, 
        public nombre: string, 
        public edad: number
        ){}

}

const CapitanAmerica = new SuperHeroe('Capitan America', 'Steve Rogers', 42);
console.log(CapitanAmerica);