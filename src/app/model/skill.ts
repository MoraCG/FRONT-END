export class Skill {
    id:number;
    nombre:String;
    progress:number;
    img:string;
    nivel:string;
    
    constructor(id:number,nombre:string,progress:number,img:string,nivel:string){
        this.id=id;
        this.nombre=nombre;
        this.progress=progress;
        this.img=img;
        this.nivel=nivel;
    }
}