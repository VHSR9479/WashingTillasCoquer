import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioModelService {
  
  apellidos: string;
  barrio: string;
  contrasena: string;
  created_At: string;
  direccion: string;
  email: string;
  id_Ciudad: number;
  id_Depto: number;
  id_Estado: number;
  id_Usuario: number;
  nombres: string;
  updated_At: string;

  constructor() { }
}
