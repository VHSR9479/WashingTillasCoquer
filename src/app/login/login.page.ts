import { Component, OnInit } from '@angular/core';
import { NavController, NavParams  } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistroPage} from "../registro/registro.page"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  private usuario = {
    username :'',
    pass :'',
    key:''
  };
  userApi = {
    token:'',
    pk_persona:'',
    persona_nombre:''
  };
  
  public isError=false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
   
  onLogin(){
    this.router.navigateByUrl("/tabs");
  }

  onRegistrar(){
    this.router.navigateByUrl("/registro");
  }

  claveDelDia(){
    const fecha_actual = new Date();
    const dia:number = fecha_actual.getDate();
    const mes:number =fecha_actual.getMonth() +1;
    const anio:number =fecha_actual.getFullYear();
    let claveDia = (anio*mes*dia)%(anio+mes+dia);
    return claveDia+"";
  }
  onLogout(){
   
  }
}
