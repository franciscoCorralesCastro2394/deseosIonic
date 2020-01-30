import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-items.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista:Lista;
  nombreItem = '';

  constructor( private deseosService:DeseosService,
               private route:ActivatedRoute) {
                const listaID = this.route.snapshot.paramMap.get('listaId');  
                this.lista = this.deseosService.obtenerLista(listaID);
   }

  ngOnInit() {
  }

  agregarItem(){
    
    if(this.nombreItem.length === 0){
        return;
    }else{
      const nuevoItem = new ListaItem(this.nombreItem);
      this.lista.items.push(nuevoItem);
      this.nombreItem = '';
      this.deseosService.guardarStore();
    }  

  }


  cambioCheck(item : ListaItem){
    const pendientes = this.lista.items.filter( itemData => !itemData.completo).length;
    console.log({pendientes});
    
    if(pendientes === 0 ){
      this.lista.terminadEn = new Date();
      this.lista.terminada = true;  
    }else{
      this.lista.terminadEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStore();
    console.log(this.deseosService.listas);
  }

}
