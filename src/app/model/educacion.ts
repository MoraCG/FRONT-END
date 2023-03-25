export class Educacion {
    id : number;
    establecimiento : string;
    logro : string;
    fecha : string;

    constructor(id:number,establecimiento:string,logro:string,fecha:string){
        this.id=id;
        this.establecimiento=establecimiento;
        this.logro=logro;
        this.fecha=fecha;
    }
}
