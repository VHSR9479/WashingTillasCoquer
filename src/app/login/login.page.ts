import { Component, OnInit } from '@angular/core';
import { NavController, NavParams  } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistroPage} from "../registro/registro.page";
import {UsuarioModelService} from '../Modelo/usuario/usuario-model.service';
import {LoginServiceService} from '../Servicios/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  constructor(private router: Router, 
              private loginService: LoginServiceService,
              private usuarioM :UsuarioModelService) {

   }

  ngOnInit() {
  }
  private usuario = {
    username :'',
    pass :''
  };

  
  public isError=false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
   
  onLogin(){
    // this.usuario.pass =  window.btoa(this.usuario.pass);
    // this.validarDatos();
    // this.router.navigateByUrl("/tabs");
    this.loginService.getUser(this.usuario.username,this.usuario.pass)
    .subscribe((data) => {
        this.usuarioM.apellidos  = data[0]['apellidos'];
        this.usuarioM.barrio     = data[0]['barrio'];
        this.usuarioM.contrasena = data[0]['contrasena'];
        this.usuarioM.created_At = data[0]['created_At'];
        this.usuarioM.direccion  = data[0]['direccion'];
        this.usuarioM.email      = data[0]['email'];
        this.usuarioM.id_Ciudad  = data[0]['id_Ciudad'];
        this.usuarioM.id_Depto   = data[0]['id_Depto'];
        this.usuarioM.id_Estado  = data[0]['id_Estado'];
        this.usuarioM.id_Usuario = data[0]['id_Usuario'];
        this.usuarioM.nombres    = data[0]['nombres'];
        this.usuarioM.updated_At = data[0]['updated_At'];
        console.log(data);
        this.validarDatos();
    },                        
    (err)=>{ 
      console.log(err);
    });
  }

  onRegistrar(){
    this.router.navigateByUrl("/registro");
  }

  validarDatos(){
  
    alert(this.usuario.username +'=='+ this.usuarioM.email +'&&'+  window.btoa(this.usuario.pass) +'=='+ window.btoa(this.usuarioM.contrasena));
    if(this.usuario.username == this.usuarioM.email &&  window.btoa(this.usuario.pass) == window.btoa(this.usuarioM.contrasena))
    {
      window.localStorage["usuario"] = this.usuarioM;
      window.localStorage["sesionEstado"] = "Activo";

      this.router.navigateByUrl("/tabs")
    }else{
      alert("Usuario o contraseña erroneos");
    }
  }

  onLogout(){
   
  }
}
