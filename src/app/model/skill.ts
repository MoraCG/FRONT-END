export class Skill {
    id?: number;
    nombre: string;
    progess: number;
    img: string;

    constructor(nombre:string, progess: number, img: string){
        this.nombre = nombre;
        this.progess = progess;
        this.img = img;
    }
}