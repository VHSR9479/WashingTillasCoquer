import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AngularDelegate } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroPage } from "../registro/registro.page";
import { UsuarioModelService } from '../Modelo/usuario/usuario-model.service';
import { LoginServiceService } from '../Servicios/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  constructor(private router: Router,
    private loginService: LoginServiceService,
    private usuarioM: UsuarioModelService) {

  }

  ngOnInit() {
  }
  private usuario = {
    username: '',
    pass: ''
  };


  public isError = false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    // this.usuario.pass =  window.btoa(this.usuario.pass);
    // this.validarDatos();
    // this.router.navigateByUrl("/tabs");

    let valdErr = true;
    if (this.usuario.username !== '' && this.usuario.pass !== '') {
      this.loginService.getUser(this.usuario.username, this.usuario.pass)
        .subscribe((data) => {
          let contador = 0;
          if (data.length !== 0) {

            Object.keys(data).map((item) => {
              console.log(1);
              // });

              this.usuarioM.apellidos = data[contador]['apellidos'];
              this.usuarioM.barrio = data[contador]['barrio'];
              this.usuarioM.contrasena = data[contador]['contrasena'];
              this.usuarioM.created_At = data[contador]['created_At'];
              this.usuarioM.direccion = data[contador]['direccion'];
              this.usuarioM.email = data[contador]['email'];
              this.usuarioM.id_Ciudad = data[contador]['id_Ciudad'];
              this.usuarioM.id_Depto = data[contador]['id_Depto'];
              this.usuarioM.id_Estado = data[contador]['id_Estado'];
              this.usuarioM.id_Usuario = data[contador]['id_Usuario'];
              this.usuarioM.nombres = data[contador]['nombres'];
              this.usuarioM.updated_At = data[contador]['updated_At'];
              contador++;
              console.log('this.usuarioM.email ' + this.usuarioM.email);
              console.log('this.usuario.username ' + this.usuario.username);
              if (this.usuarioM.email === this.usuario.username) {
                this.validarDatos();
              } else {
                alert('Usuario o contraseña erroneos');
              }

            });
          } else {
            alert('Tu Usuario está mal escrito o no se encuentra registrado');
          }
        },
          (err) => {
            console.log(err);
            console.log('Holaaa');
          });
    } else {
      alert('Se Deben Ingresar Todos los Datos');
    }
  }

  onRegistrar() {
    this.router.navigateByUrl("/registro");
  }

  validarDatos() {
    if (this.usuario.username === this.usuarioM.email && window.btoa(this.usuario.pass) == window.btoa(this.usuarioM.contrasena)) {
      window.localStorage["usuarioName"] = this.usuarioM.nombres;
      window.localStorage["sesionEstado"] = "Activo";
      this.router.navigateByUrl("/tabs")
    }
  }

  onLogout() {

  }
}
