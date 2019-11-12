import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( private route: Router) { } 
  private tipo:"";
  municipios: municipio[];
  municipio : municipio;


  ngOnInit() {
  }
  onLogin(){
    this.route.navigateByUrl("/login");
  }

  changeDepartamento(){
  }

  municipioSearch(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    const val = event.text;
    event.component.startSearch();
    alert("ingreso");

  }


}

class municipio{
  public id: number;
  public nombre:String;
  public departamento:number;
}
