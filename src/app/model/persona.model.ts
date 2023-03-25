export class Persona{
    id: number;
    nombre: string;
    apellido: string;
    titulo: string;
    hobbie: string;
    img: string;


    constructor(id: number, nombre: string, apellido: string, titulo: string, hobbie: string, img: string) {

        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.hobbie = hobbie;
        this.img = img;
    }
}