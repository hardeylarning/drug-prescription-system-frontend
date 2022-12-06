export class Drug {
    constructor(
        public id: number,
        public title: string,
        public image: string,
        public description: string,
        public sideEffect: string,
        public dosage: string,
        public age: string,
        public mfDate: Date,
        public exDate: Date
    ){}
}
