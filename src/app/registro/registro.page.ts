import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MunicipioModelService } from '../Modelo/municipio/municipio-model.service'
import { IonicSelectableComponent } from 'ionic-selectable';
import { LocalidadServiceService } from '../Servicios/localidad/localidad-service.service';
import { UsuarioModelService } from '../Modelo/usuario/usuario-model.service';
import { LoginServiceService } from '../Servicios/login/login-service.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  private municipioM: MunicipioModelService[] =
    [{ id: 1, nombre: 'Medellín', id_dep: 1 },
    { id: 2, nombre: 'Sabaneta', id_dep: 1 },
    { id: 3, nombre: 'Itagüí', id_dep: 1 },
    { id: 4, nombre: 'Bogotá', id_dep: 2 },
    { id: 5, nombre: 'Soacha', id_dep: 2 },
    { id: 6, nombre: 'Medina', id_dep: 2 },
    { id: 7, nombre: 'Cali', id_dep: 3 },
    { id: 8, nombre: 'Palmira', id_dep: 3 },
    { id: 9, nombre: 'Florida', id_dep: 3 }];

  private
  private municipioId: number;

  constructor(private route: Router,
    private localidad: LocalidadServiceService,
    private usuarioM: UsuarioModelService,
    private loginS: LoginServiceService) { }



  ngOnInit() {
  }
  onLogin() {
    this.route.navigateByUrl("/login");
  }

  changeDepartamento() {
    alert(this.usuarioM.id_Depto);
  }
  onRegistro() {
    // alert(   this.usuarioM.apellidos + " --"
    // +  this.usuarioM.barrio + " --"
    // +  this.usuarioM.contrasena + " --"
    // +  this.usuarioM.created_At + " --"
    // +  this.usuarioM.direccion + " --"
    // +  this.usuarioM.email + " --"
    // +  this.usuarioM.id_Ciudad + " --"
    // +  this.usuarioM.id_Depto + " --"
    // +  this.usuarioM.id_Estado + " --"
    // +  this.usuarioM.id_Usuario + " --"
    // +  this.usuarioM.nombres + " --"
    // +  this.usuarioM.updated_At + " --");

    let body =
    {
      'nombres': this.usuarioM.nombres,
      'apellidos': this.usuarioM.apellidos,
      'email': this.usuarioM.email,
      'direccion': this.usuarioM.direccion,
      'barrio': this.usuarioM.barrio,
      'contrasena': this.usuarioM.contrasena,
      'id_Estado': 1,
      'id_Depto': 3,
      'id_Ciudad': 7
    }
    console.log(body);
    this.loginS.postUser(body).subscribe((data) => {
      console.log(data);
      alert("SE HA GUARDADO EL USUARIO :" + data['email']);
    },
      (error) => {
        console.log(error);
      });
  }


}
