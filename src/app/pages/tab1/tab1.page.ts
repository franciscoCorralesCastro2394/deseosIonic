import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
lista:Lista[] = []

  constructor(public deseosService: DeseosService,
              private router:Router,
              private alertCtrl:AlertController) {

    this.lista = this.deseosService.listas;
  }


 async agregarLista(){
    //this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertCtrl.create({
      header:'Nueva lista',
      inputs:[
        {
          name:'titulo',
          type:'text',
          placeholder:'Nombre de lista'
        }

      ],
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler:() => {console.log('cancel');} 
         },
         {
           text:'Crear',
           handler:(data) => { console.log(data);
            if (data.titulo.length === 0){
              return;
            }

           const listaId = this.deseosService.crearLista(data.titulo);
           this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          
          } 
         }
    ]
    });

    alert.present();
  }


  listaSeleccionada(lista:Lista){

    console.log(lista);
    debugger
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);

  }

}
