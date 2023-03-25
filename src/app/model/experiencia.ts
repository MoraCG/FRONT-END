export class Experiencia {
    id : number;
    nombre : string;
    puesto : string;
    fecha : string;

    constructor(id:number,nombre: string, puesto: string, fecha: string){
        this.id=id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.fecha = fecha;
    }
}
