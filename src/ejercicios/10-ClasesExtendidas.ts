
class PersonaReal {
    constructor(
        public nombreReal: string,
        public direccion: string = 'New York, EEUU'
    ) { }
}


class AntiHeroe extends PersonaReal {

    constructor(
        public alterEgo: string,
        public edad: number
    ) {
        super('Wade Wilson')
    }

}

const antiHeroe = new AntiHeroe('Deadpool', 42);
console.log(antiHeroe);