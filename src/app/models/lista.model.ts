import { ListaItem } from './lista-items.model'

export class Lista {

    id:number;
    titulo:string;
    creadaEn:Date;
    terminadEn:Date;
    terminada:boolean;
    items : ListaItem[];

    constructor(titulo:string){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}