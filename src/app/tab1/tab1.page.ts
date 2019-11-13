import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import {UsuarioModelService} from '../Modelo/usuario/usuario-model.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 private nombre ;
  
  constructor(private routerAct: ActivatedRoute, 
              private router:Router,
              private usuarioM :UsuarioModelService) {
                usuarioM = window.localStorage["apiNameUser"];
        this.nombre=usuarioM.nombres;
  }

  exit(){
    window.localStorage.clear();
    this.router.navigateByUrl("/login");
  }

}
