export class Case {
    constructor(
        public country: string,
        public newcases: number,
        public deaths: number,
        public recovered: number,
        public province: string,
        public confirmed: number
    ){
    }
}