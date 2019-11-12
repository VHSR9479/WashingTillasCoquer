import { Component, OnInit } from '@angular/core';
import { NavController, NavParams  } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistroPage} from "../registro/registro.page";

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
    this.usuario.pass =  window.btoa(this.usuario.pass);
    this.validarDatos();
    // this.router.navigateByUrl("/tabs");
  }

  onRegistrar(){
    this.router.navigateByUrl("/registro");
  }

  validarDatos(){
    if(this.usuario.username == 'VHSR9479' &&  this.usuario.pass == window.btoa("admin"))
    {
      alert("ingreso");
      this.router.navigateByUrl("/tabs")
    }else{
      alert("Datos Erroneos al ingresar");
    }
  }

  onLogout(){
   
  }
}
