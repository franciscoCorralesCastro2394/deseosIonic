import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  listas: Lista[] = [];

  constructor() {
    // console.log('init service');
    
    //const lista1 = new Lista('Recolectar las pridras del infinito');
    //const lista2 = new Lista('Recolectar las piedras del rio');
    //this.listas.push(lista1,lista2);
    //  console.log(this.listas);
    this.cargarStarage();
  }

crearLista( titulo:string){
  const nuevaLista = new Lista(titulo);
  this.listas.push(nuevaLista);
  this.guardarStore();
  return nuevaLista.id;
}

guardarStore() {

  localStorage.setItem('data', JSON.stringify(this.listas));
}

obtenerLista(id:string | number){
  id = Number(id);
  return this.listas.find(listaData =>  listaData.id === id);
} 

cargarStarage(){

  if (localStorage.getItem('data')){
    this.listas = JSON.parse(localStorage.getItem('data'));  
  }else{
    this.listas = [];
  }
} 

}
